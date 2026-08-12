import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

interface QuoteItem {
  instrument: {
    id: string;
    sku: string;
    name: string;
    category: string;
    description: string;
    material: string;
    approxPrice: number;
  };
  quantity: number;
}

interface QuoteRequest {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  tier: string;
  notes: string;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Send Sourcing Inquiry Email
  app.post("/api/send-inquiry", async (req, res) => {
    try {
      const { fullName, organization, email, phone, tier, notes, items, refId, date } = req.body;

      if (!fullName || !organization || !email || !items || items.length === 0) {
        return res.status(400).json({ error: "Required customer details or items are missing." });
      }

      const totalUnits = (items as QuoteItem[]).reduce((sum, item) => sum + item.quantity, 0);

      // 1. Build beautiful HTML email content
      const itemsHtml = (items as QuoteItem[]).map((item) => `
        <tr style="border-bottom: 1px solid #e4e4e7;">
          <td style="padding: 12px 8px; text-align: left; font-family: monospace; font-size: 12px;">${item.instrument.sku}</td>
          <td style="padding: 12px 8px; text-align: left;">
            <strong style="color: #18181b;">${item.instrument.name}</strong><br />
            <span style="font-size: 11px; color: #71717a;">${item.instrument.category} | ${item.instrument.material}</span>
          </td>
          <td style="padding: 12px 8px; text-align: right; font-weight: bold; color: #8b0000;">${item.quantity} units</td>
        </tr>
      `).join("");

      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Safe Core Surgical Requisition</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #fafafa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafafa; padding: 24px 12px;">
            <tr>
              <td align="center">
                <table width="100%" max-width="600" style="max-width: 600px; background-color: #ffffff; border-top: 4px solid #8b0000; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-collapse: collapse;" cellpadding="0" cellspacing="0">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 32px 20px 32px; border-bottom: 1px solid #f4f4f5;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <span style="font-size: 11px; font-weight: bold; color: #8b0000; letter-spacing: 0.2em; text-transform: uppercase; display: block; margin-bottom: 4px;">Verified Clinical Request</span>
                            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #18181b; letter-spacing: -0.02em;">Safe Core Surgical</h1>
                          </td>
                          <td align="right" style="text-align: right;">
                            <span style="display: inline-block; padding: 6px 12px; background-color: #fef2f2; border: 1px solid #fee2e2; color: #991b1b; font-family: monospace; font-size: 11px; font-weight: bold; border-radius: 3px;">
                              ${refId || "SC-REQ-NEW"}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Meta Grid -->
                  <tr>
                    <td style="padding: 24px 32px; background-color: #fafafa; border-bottom: 1px solid #f4f4f5;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 12px; line-height: 1.6; color: #52525b;">
                        <tr>
                          <td width="50%" valign="top" style="padding-right: 16px;">
                            <strong style="color: #18181b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Client Entity</strong>
                            <strong style="color: #18181b; font-size: 13px;">${organization}</strong><br />
                            Representative: ${fullName}<br />
                            Tier: <span style="color: #8b0000; font-weight: bold;">${tier}</span>
                          </td>
                          <td width="50%" valign="top">
                            <strong style="color: #18181b; text-transform: uppercase; font-size: 10px; letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Communication Details</strong>
                            Email: <a href="mailto:${email}" style="color: #8b0000; text-decoration: none;">${email}</a><br />
                            Phone: ${phone}<br />
                            Date Submitted: ${date || new Date().toISOString().split("T")[0]}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Items Table -->
                  <tr>
                    <td style="padding: 32px;">
                      <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #71717a;">Sourcing Requisition Manifest</h3>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; font-size: 13px; line-height: 1.5; color: #27272a;">
                        <thead>
                          <tr style="border-bottom: 2px solid #e4e4e7; font-size: 11px; font-weight: bold; color: #71717a; text-transform: uppercase;">
                            <th width="25%" style="padding-bottom: 8px; text-align: left;">SKU</th>
                            <th width="55%" style="padding-bottom: 8px; text-align: left;">Instrument / Specs</th>
                            <th width="20%" style="padding-bottom: 8px; text-align: right;">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${itemsHtml}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="2" style="padding: 24px 0 0 0; font-size: 11px; color: #71717a;">
                              <strong>STERILIZATION INTEGRITY</strong><br />
                              <span style="color: #15803d; font-weight: bold;">✓ APPROVED MOIST-HEAT AUTOCLAVE OK (134°C)</span>
                            </td>
                            <td style="padding: 24px 0 0 0; text-align: right; vertical-align: top;">
                              <span style="font-size: 10px; color: #71717a; text-transform: uppercase; display: block; margin-bottom: 2px;">Total Units</span>
                              <span style="font-size: 20px; font-weight: 850; color: #8b0000; letter-spacing: -0.02em;">${totalUnits} Units</span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </td>
                  </tr>

                  <!-- Notes -->
                  ${notes ? `
                  <tr>
                    <td style="padding: 0 32px 32px 32px;">
                      <div style="padding: 16px; background-color: #fef2f2; border-left: 3px solid #8b0000; border-radius: 4px; font-size: 12px; color: #7f1d1d; line-height: 1.5;">
                        <strong style="display: block; margin-bottom: 4px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.05em;">Special Procurement Instructions:</strong>
                        <em>"${notes}"</em>
                      </div>
                    </td>
                  </tr>
                  ` : ""}

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 32px; background-color: #18181b; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; text-align: center; font-size: 11px; color: #a1a1aa; line-height: 1.5;">
                      <strong>Safe Core Surgical | Precision in Every Cut</strong><br />
                      Surgical-grade premium stainless steel instrumentation mfg. ISO 13485.<br />
                      This email was generated in response to an active client inquiry on <a href="https://safecoresurgical.com" style="color: #f4f4f5; text-decoration: underline;">safecoresurgical.com</a>.
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      // 2. Set up Transporter (Standard SMTP configuration or fallback)
      let transporter: nodemailer.Transporter;
      let usingFallback = false;
      let testPreviewUrl = "";

      const hasSmtpConfig = process.env.SMTP_USER && process.env.SMTP_PASS;

      if (hasSmtpConfig) {
        console.log("Configuring email transporter with custom SMTP credentials...");
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
      } else {
        console.log("No SMTP credentials found in environment. Initializing dynamic Ethereal testing account...");
        usingFallback = true;
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      }

      // 3. Send the Mail
      const mailOptions = {
        from: process.env.SMTP_FROM_EMAIL || `"Safe Core Catalog" <noreply@safecoresurgical.com>`,
        to: "sales@safecoresurgical.com",
        replyTo: email,
        subject: `[Requisition ${refId || "NEW"}] - Sourcing Quote Inquiry from ${organization}`,
        html: emailHtml,
      };

      const info = await transporter.sendMail(mailOptions);

      if (usingFallback) {
        testPreviewUrl = nodemailer.getTestMessageUrl(info) || "";
        console.log("Email sent successfully via test account fallback!");
        console.log("Preview URL:", testPreviewUrl);
      } else {
        console.log(`Email sent successfully to sales@safecoresurgical.com! Message ID: ${info.messageId}`);
      }

      return res.json({
        success: true,
        message: "Your surgical quote requisition was dispatched successfully.",
        refId,
        usingFallback,
        testPreviewUrl,
      });

    } catch (error: any) {
      console.error("Email dispatcher failure:", error);
      return res.status(500).json({
        error: "Internal server failed to compile or dispatch email requisition.",
        details: error.message || error
      });
    }
  });

  // Serve static UI files and hook Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Full-Stack Server] Safe Core Surgical active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
