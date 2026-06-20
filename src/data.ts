/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SurgicalInstrument, SurgicalCategory } from "./types";

export const SURGICAL_INSTRUMENTS: SurgicalInstrument[] = [
  // ==========================================
  // 1. GENERAL SURGERY
  // ==========================================
  {
    id: "gs-201",
    name: "Precision Surgical Scalpel Handle (No. 3)",
    category: SurgicalCategory.GENERAL,
    sku: "SC-GS-201-SH",
    material: "Satin-Finished Bio-Grade German Stainless Carbon Steel",
    description: "Sleek and perfectly balanced handle with an ergonomic knurled cross-hatch grip for standard surgical scalpel blades No. 10 through 15C.",
    approxPrice: 120,
    specs: [
      "Total Length: 125mm",
      "Blade Attachment: Secure slip-lock channel",
      "Finish: Satin electro-polished anti-glare",
      "Sterilization: Autoclavable at 134°C (Moist Heat OK)"
    ],
    features: [
      "Perfect balanced point reduces muscle fatigue",
      "Micro-structured safety ridges block sliding",
      "Highly resistant to thermal wear and oxidation"
    ],
    iconName: "Scissors"
  },
  {
    id: "gs-202",
    name: "Mayo Surgical Scissors (Straight)",
    category: SurgicalCategory.GENERAL,
    sku: "SC-GS-202-MS",
    material: "Tempered Tungsten Carbide Inserts & Surgical Chromium Steel",
    description: "Rugged and razor-sharp scissors engineered for cuts through tough superficial fascia, tendons, and muscle tissue borders.",
    approxPrice: 280,
    specs: [
      "Total Length: 170mm",
      "Blade Profile: Beveled straight edges",
      "Joint Configuration: Closed box screw thread",
      "Cutting Rating: Up to 15,000 incisions before re-honing"
    ],
    features: [
      "Gold-plated finger loops indicate tungsten carbide reinforcement",
      "Micro-aligned hinge avoids rotational blade deflection",
      "Hand-calibrated scissor tension for consistent pressure"
    ],
    iconName: "Scissors"
  },
  {
    id: "gs-203",
    name: "Metzenbaum Precision Scissors (Curved)",
    category: SurgicalCategory.GENERAL,
    sku: "SC-GS-203-MPC",
    material: "High-Performance Cobalt-Alloyed Surgical Steel",
    description: "Slender-tipped curved scissors designed specifically for atraumatic dissection of deep-lying soft organs and vascular membranes.",
    approxPrice: 295,
    specs: [
      "Total Length: 180mm",
      "Blade Profile: Smooth curved blunt-blunt tips",
      "Joint Type: Lubricated lap joint",
      "Corrosion Class: Grade AA passivation"
    ],
    features: [
      "Ultra-slender shaft layout maximizes surgical field visibility",
      "Micro-bevel blade structure avoids tissue slippage of soft vessels",
      "Optimized spring rate on shear action"
    ],
    iconName: "Scissors"
  },
  {
    id: "gs-204",
    name: "Adson Micro-Tissue Forceps (1x2 Teeth)",
    category: SurgicalCategory.GENERAL,
    sku: "SC-GS-204-AF",
    material: "Satin Titanium Alloy with Hardened Tips",
    description: "Essential delicate forceps with micro 1x2 teeth for absolute, non-slip purchase on skin margins and subcutaneous fascia without causing tissue trauma.",
    approxPrice: 190,
    specs: [
      "Total Length: 120mm",
      "Tip Width: 0.8mm micro profile",
      "Tooth structure: 1x2 interlocking medical teeth",
      "Weight: Ultra-light 9.5 grams"
    ],
    features: [
      "Lateral stabilizing platform stops micro scissor-twisting of the tips",
      "Perfect spring-back resilience calibrated at exactly 1.0 Newton",
      "Non-magnetic composition for safe active cauterization spaces"
    ],
    iconName: "Compass"
  },
  {
    id: "gs-205",
    name: "Mosquito Hemostatic Forceps (Curved)",
    category: SurgicalCategory.GENERAL,
    sku: "SC-GS-205-MHF",
    material: "High-Tensile Antimagnetic Stainless Steel",
    description: "Fine, curved forceps with transverse serrations designed for the selective clamping of small blood vessels to achieve dry, clean surgical fields.",
    approxPrice: 180,
    specs: [
      "Total Length: 125mm",
      "Jaw Shape: Fully curved delicate jaws",
      "Ratchet Type: 3-step gradual click-lock",
      "Serrations: Continuous deep horizontal ridges"
    ],
    features: [
      "Micro-machined interlocking box joint maintains precise alignment",
      "Atraumatic teeth density reduces vessel shear pressure",
      "Slim-bored shanks provide high flex feedback"
    ],
    iconName: "Wrench"
  },
  {
    id: "gs-206",
    name: "Mayo-Hegar High-Precision Needle Holder",
    category: SurgicalCategory.GENERAL,
    sku: "SC-GS-206-NH",
    material: "Diamond-Pattern Tungsten Carbide Silver-Soldered Jaws",
    description: "Heavy-duty needle driver with cross-serrated diamond pyramids for solid locking of wire and monofilament surgical needles.",
    approxPrice: 320,
    specs: [
      "Total Length: 160mm",
      "Jaw Pattern: Cross-serrated micro pyramids (0.4mm pitch)",
      "Ratchet: Precision multi-position click ratchet",
      "Suture compatibility: 2-0 to 6-0 suture wires"
    ],
    features: [
      "Tungsten inserts offer unmatched longevity and wear resistance",
      "Beveled joint hinges prevent suture catching and snarls",
      "Balanced grip weight distributes pressure over palm tissue"
    ],
    iconName: "ShieldCheck"
  },

  // ==========================================
  // 2. ORTHOPEDIC SURGERY
  // ==========================================
  {
    id: "or-301",
    name: "Anatomical Bone Holding Forceps",
    category: SurgicalCategory.ORTHOPEDIC,
    sku: "SC-OR-301-BHF",
    material: "Double-Jointed Heavy Cobalt Steel Alloy",
    description: "Powerful bone manipulator designed with self-retracting serrated jaws to stabilize fracture fragments during plate fixation.",
    approxPrice: 650,
    specs: [
      "Total Length: 240mm",
      "Bore opening: Max 45mm diameter scale",
      "Hinge: Double-pivot lever multiplier",
      "Tension adjustment: Threaded quick-turn speed lock"
    ],
    features: [
      "Massive grip stabilization with minimal user wrist fatigue",
      "Self-retaining speed lock holds position automatically",
      "Deeply grooved jaws prevent rotational slippage on wet bone"
    ],
    iconName: "Wrench"
  },
  {
    id: "or-302",
    name: "Titanium Double-Action Bone Rongeur",
    category: SurgicalCategory.ORTHOPEDIC,
    sku: "SC-OR-302-BR",
    material: "SurgiTitan Premium Grade 5 Compound & DLC Coating",
    description: "Ultra-powerful compound leverage rongeur designed for shearing dense cortical bone, osteophytes, and tough articular cartilage.",
    approxPrice: 820,
    specs: [
      "Total Length: 220mm",
      "Jaw Width: 4mm straight scoop jaw",
      "Lever type: Dual articulating action joints",
      "Coating: Diamond-Like Carbon (DLC) wear barrier"
    ],
    features: [
      "Compound double joints amplify grip pressure by up to 300%",
      "Smooth return leaf springs integrated directly inside the shafts",
      "Fully demountable architecture for detailed sterilizer access"
    ],
    iconName: "Activity"
  },
  {
    id: "or-303",
    name: "Periosteal Elevator (Slightly Curved)",
    category: SurgicalCategory.ORTHOPEDIC,
    sku: "SC-OR-303-PE",
    material: "Hardened Spring-Grade Steel Alloy with Satin Buff",
    description: "Ergonomic wedge-shaped elevator crafted to cleanly strip dense periosteum tissue away from bone shafts prior to sawing.",
    approxPrice: 240,
    specs: [
      "Total Length: 195mm",
      "Tip Width: 6mm slightly curved round profile",
      "Handle shape: Hexagonal non-slip solid bolster",
      "Finish: Double-passivated clinical buff"
    ],
    features: [
      "Semi-sharp chamfered edge prevents periosteal tears",
      "Balanced solid core offers incredible tactile bone-depth feedback",
      "Perfect non-slip hex grip prevents rotation even when wet"
    ],
    iconName: "Layers"
  },
  {
    id: "or-304",
    name: "Balanced Orthopedic Bone Mallet",
    category: SurgicalCategory.ORTHOPEDIC,
    sku: "SC-OR-304-BM",
    material: "Heavy Solid Bronze Core Coated in 316L Surgical Stainless",
    description: "Perfectly weighted orthopedic hammer designed to direct force cleanly down the shaft of osteotomes and gouges during bone sculpting.",
    approxPrice: 310,
    specs: [
      "Total Length: 215mm",
      "Head Diameter: 35mm flat disks",
      "Total Weight: 450 grams calibrated",
      "Handle: Grooved medical-grade silicone sleeve"
    ],
    features: [
      "Composite bronze insert absorbs high-frequency shock reflections",
      "Flanged striking platform prevents miss-hits and lateral slipping",
      "Full solid core prevents micro-fracturing of internal metal structure"
    ],
    iconName: "Hammer"
  },
  {
    id: "or-305",
    name: "Elite Orthopedic Hand-Crank Drill (Dual-Speed)",
    category: SurgicalCategory.ORTHOPEDIC,
    sku: "SC-OR-305-HCD",
    material: "Grade 316 Austenite Stainless Steel Gears & Shell",
    description: "A dual-speed mechanical surgical hand drill providing ultra-frictional clinical bone penetrations without causing thermal necrosis.",
    approxPrice: 590,
    specs: [
      "Total Length: 290mm",
      "Chuck Capacity: 0.5mm to 6.5mm keyless check",
      "Gear ratio: High-torque 1:1 and high-speed 1:4 selections",
      "Lubrication: Sealed self-lubricating polymer seals"
    ],
    features: [
      "Manual control eliminates bone heat generation seen in power drills",
      "Keyless lock mechanism supports instant modular drill bit swap-out",
      "Autoclavable drive train handles multiple vacuum cleaning runs"
    ],
    iconName: "Wrench"
  },

  // ==========================================
  // 3. ENT (EAR, NOSE & THROAT)
  // ==========================================
  {
    id: "ent-401",
    name: "Nasal Speculum (Vienna Pattern)",
    category: SurgicalCategory.ENT,
    sku: "SC-ENT-401-NS",
    material: "Mirror-Polished Fine Spring Surgical Steel",
    description: "Classic robust speculum featuring spring-return handles used to expand the nasal cavity for diagnostic rhinoscopy and septum intervention.",
    approxPrice: 190,
    specs: [
      "Total Length: 135mm",
      "Blade Width: Medium 15mm tapered blades",
      "Drive: Flexible spring-return leaf style",
      "Hinge: Screw-lock with tension adjustment"
    ],
    features: [
      "Hand-polished rounded edges prevent mucous membrane injury",
      "Stiff leaf spring provides effortless manual dilation pressure",
      "Flared outer handles fit comfort curves of the surgeon's palm"
    ],
    iconName: "Maximize2"
  },
  {
    id: "ent-402",
    name: "Tonsil Snare & Seizing Forceps",
    category: SurgicalCategory.ENT,
    sku: "SC-ENT-402-TS",
    material: "Electropolished Hardened Austenitic Steel",
    description: "A slender, surgical-grade tonsil seizing instrument with multi-position ratchets to grab and anchor tonsillar tissue safely.",
    approxPrice: 320,
    specs: [
      "Total Length: 200mm",
      "Shaft Profile: Ultra-slender curved shaft",
      "Jaw Window: Fenestrated serrated loop",
      "Ratchet: Precision multi-stage lock system"
    ],
    features: [
      "Long, thin design keeps the surgeon's hands and vision clear of the oral cavity",
      "No-twist box hinge holds tip alignment under significant lateral loads",
      "Polished to grade mirror-finish to block biological residue adhesion"
    ],
    iconName: "Compass"
  },
  {
    id: "ent-403",
    name: "Deluxe Ear Curette (Double-Ended Wire)",
    category: SurgicalCategory.ENT,
    sku: "SC-ENT-403-EC",
    material: "Semi-Flexible Fine Platinum-Silver Wire Shaft",
    description: "Highly flexible double-ended curette with a ring scoop and a micro blunt wire loop for atraumatic wax and scale debridement inside the auditory canal.",
    approxPrice: 145,
    specs: [
      "Total Length: 165mm",
      "Tip Shapes: 2mm flexible wire loop / 1.5mm spoon cup",
      "Handle: Octagonal knurled solid grip",
      "Weight: Lightweight 7 grams"
    ],
    features: [
      "Soft platino-silver composition lets the wire bend under over-pressure",
      "Tactile knurled shaft provides precise rotational adjustment feedback",
      "Single-piece design eliminates micro weld failure under hot autoclaving"
    ],
    iconName: "GitCommit"
  },
  {
    id: "ent-404",
    name: "Clinical Laryngeal Mirror (Anti-Fog Glass)",
    category: SurgicalCategory.ENT,
    sku: "SC-ENT-404-LM",
    material: "Rhodium-Coated Mineral Glass & Stainless Shaft",
    description: "Slimline laryngeal mirror fitted with a high-surface rhodium reflective coating to provide non-reversed, anti-fog views of the vocal folds.",
    approxPrice: 115,
    specs: [
      "Total Length: 220mm",
      "Mirror Diameter: Size No. 4 (22mm broad view)",
      "Stem structure: Flat-ground safety shaft",
      "Thermal tolerance: Autoclavable up to 134°C"
    ],
    features: [
      "Anti-fog rhodium surface reflects light with high spectral accuracy",
      "Extended safety stem prevents accidental slips in oral corridors",
      "Hermetically sealed mirror frame prevents internal moisture corrosion"
    ],
    iconName: "Maximize2"
  },
  {
    id: "ent-405",
    name: "ENT Suction Tip (Frazier Pattern 8 Fr)",
    category: SurgicalCategory.ENT,
    sku: "SC-ENT-405-ST",
    material: "Malleable Brass Chrome-Plated Tube",
    description: "Slender micro suction tube with manual thumb-bypass regulation port used to clear minute fluid pools during middle ear or paranasal surgery.",
    approxPrice: 135,
    specs: [
      "Bore Size: 8 French (2.6mm core)",
      "Total Length: 180mm with 110mm working reach",
      "Suction regulation: Circular manual thumb-bypass hole",
      "Wire cleanout: Included flexible copper stylet"
    ],
    features: [
      "Malleable metal tube can be slightly custom-bent for particular surgeries",
      "Thumb bypass hole gives instant mechanical suction relief",
      "Fully rounded tip avoids trauma to mucosal capillary vessels"
    ],
    iconName: "Activity"
  },

  // ==========================================
  // 4. GYNECOLOGY & OBSTETRICS
  // ==========================================
  {
    id: "gyn-501",
    name: "Cusco Vaginal Speculum",
    category: SurgicalCategory.GYNECOLOGY,
    sku: "SC-GYN-501-CVS",
    material: "Solid Satin-Finished Stainless Steel",
    description: "Classic self-retaining bi-valve vaginal dilator with a high-strength center thumb-screw block for reliable clinical pelvic examinations.",
    approxPrice: 210,
    specs: [
      "Total Length: 115mm x 35mm blade profile",
      "Adjuster mechanism: Rapid-turn central knurled thumb screw",
      "Finish: Double-satin matte skin (zero mirror reflection)",
      "Joint assembly: Pinless sanitary rivet joint"
    ],
    features: [
      "Wide blade curvature prevents vaginal wall collapse during examination",
      "Satin skin texture is softer and more comfortable for tissue contact",
      "Robust screw dial keeps dilation stable and hands-free for biopsy work"
    ],
    iconName: "Maximize2"
  },
  {
    id: "gyn-502",
    name: "Flexible Graduated Uterine Sound",
    category: SurgicalCategory.GYNECOLOGY,
    sku: "SC-GYN-502-US",
    material: "Malleable Silver-Plated Copper Alloy Core",
    description: "Slender, graduated uterine probe with centimeter indicators used to measure the depth and direction of the uterine canal safely.",
    approxPrice: 140,
    specs: [
      "Total Length: 320mm calibrated length",
      "Graduations: Clear indented marks from 1cm to 25cm",
      "Tip Shape: Smooth spherical 3mm bulb tip",
      "Flexibility: Hand-malleable semi-firm alloy"
    ],
    features: [
      "Rounded blunt tip avoids uterine wall perforation under normal guidance",
      "Silver-plating provides natural micro-antiseptic and smooth sliding traits",
      "Flat thumb handle maximizes rotational control during advancement"
    ],
    iconName: "GitCommit"
  },
  {
    id: "gyn-503",
    name: "Ovum Seizing Forceps (Fenestrated)",
    category: SurgicalCategory.GYNECOLOGY,
    sku: "SC-GYN-503-OSF",
    material: "Satin-Finished Surgical Stainless Steel",
    description: "Fully curved obstetrical forceps featuring large oval fenestrated cups designed for delicate, non-traumatic grabbing of tissue and placenta.",
    approxPrice: 340,
    specs: [
      "Total Length: 250mm extra reach",
      "Cup Tip: 15mm oval open ring jaws",
      "Hinge Joint: Seamless box hinge assembly",
      "Locking: Smooth-gliding catchless ratchet"
    ],
    features: [
      "Large fenestrations distribute extraction pressures safely over soft membranes",
      "Long curved shank provides ideal ergonomic access angle",
      "Gold-lined box joint prevents micro-twisting under heavy clamp loads"
    ],
    iconName: "Compass"
  },
  {
    id: "gyn-504",
    name: "Episiotomy Scissors (Braun-Stadler Curved)",
    category: SurgicalCategory.GYNECOLOGY,
    sku: "SC-GYN-504-ES",
    material: "AISI 440C Hardened Stainless Steel with Tungsten Inserts",
    description: "Specially angled scissors with a broad flat lower blade, crafted to make precise episiotomy incisions while directing sharp tips away from the fetus.",
    approxPrice: 265,
    specs: [
      "Total Length: 145mm",
      "Blade Shape: Broad angled curved blades",
      "Pivot style: High-tensile double-screw lock",
      "Cutting Force: Rated up to 150 Newtons slice load"
    ],
    features: [
      "Distinct angled blade orientation keeps the surgeon's hands clear of the perineum",
      "Broad, dulled lower safety guard slides smoothly without trapping skin fold",
      "Tungsten carbide inserts provide long serration knife integrity"
    ],
    iconName: "Scissors"
  },

  // ==========================================
  // 5. DENTAL & ORAL SURGERY
  // ==========================================
  {
    id: "den-601",
    name: "Premium Dental Elevator (Straight Root)",
    category: SurgicalCategory.DENTAL,
    sku: "SC-DEN-601-DE",
    material: "High-Carbon Martensitic Stainless Steel Alloy",
    description: "Rugged straight dental elevator with a wide hexagonal handle, designed to slide down periodontal ligament channels and luxate deep roots.",
    approxPrice: 130,
    specs: [
      "Total Length: 160mm",
      "Blade tip: 4.5mm straight gouge spoon tip",
      "Handle: Hollow faceted ergonomic hexagon",
      "Torsional Load: Max yield 12 Newton-meters"
    ],
    features: [
      "Tempered wedge tip remains sharp under continuous alveolar rubbing",
      "Splayed hex handle transfers twist rotations directly to the tooth tip",
      "One-piece forged metal body resists high torque fatigue"
    ],
    iconName: "Wrench"
  },
  {
    id: "den-602",
    name: "Universal Extraction Forceps (No. 150)",
    category: SurgicalCategory.DENTAL,
    sku: "SC-DEN-602-UEF",
    material: "Satin-Finished High-Tensile Surgical Steel",
    description: "Anatomically curved upper tooth extraction forceps featuring textured non-slip panels and parallel beak alignment for safe root extraction.",
    approxPrice: 255,
    specs: [
      "Total Length: 175mm",
      "Beak Shape: Convex curved root beak",
      "Joint Type: Completely closed sanitary pinless pin",
      "Grip: Micro-checkered lateral grip lines"
    ],
    features: [
      "Anatomical shape fits standard bicuspid and canine root curvature",
      "Textured handles maximize hand leverage in high moisture conditions",
      "Honed interior billing prevents crown slippage during dental extraction"
    ],
    iconName: "Compass"
  },
  {
    id: "den-603",
    name: "Bone File (Miller-Colburn Cross-Cut)",
    category: SurgicalCategory.DENTAL,
    sku: "SC-DEN-603-BF",
    material: "Ultra-Tempered Surgical Cobalt Stainless Steel",
    description: "Double-ended orthopedic bone file fitted with fine cross-cut tooth patterns, engineered to smooth sharp alveolar ridges after extraction.",
    approxPrice: 160,
    specs: [
      "Total Length: 180mm",
      "File tips: 6mm oval cross-cut file / 4.5mm flat micro file",
      "Grip: Central round knurled handle section",
      "Tooth profile: Dual-directional cutting teeth"
    ],
    features: [
      "Specially designed grooves throw bone filings out of the file path",
      "Symmetric weight allocation reduces finger fatigue during long file strokes",
      "Passivated surface resists severe mechanical sanitization cycles"
    ],
    iconName: "Layers"
  },
  {
    id: "den-604",
    name: "Mouth Gag (McIvor Pattern with Blades)",
    category: SurgicalCategory.DENTAL,
    sku: "SC-DEN-604-MG",
    material: "Satin Nickel-Chrome Coated Steel & Silicone Accents",
    description: "Self-retaining mouth gag system fitted with tooth protection sleeves and interchangeable tongue blades to provide airway management and wide oral access.",
    approxPrice: 420,
    specs: [
      "Frame size: Standard pediatric & adult frame",
      "Blades included: Three sizes of fenestrated tongue blades",
      "Lock type: Quick-release manual rack ratchet",
      "Silicone caps: Four high-temp medical grade cushion caps"
    ],
    features: [
      "Spring-balanced vertical ratchet holds mouth opening without slippage",
      "Silicone caps shield native enamel from direct metal tool friction",
      "Deeply channeled tongue blades keep air lines and field visible"
    ],
    iconName: "Maximize2"
  },

  // ==========================================
  // 6. OPHTHALMIC (EYE SURGERY)
  // ==========================================
  {
    id: "oph-701",
    name: "Castroviejo Micro-Needle Holder (Straight)",
    category: SurgicalCategory.OPHTHALMIC,
    sku: "SC-OPH-701-CMH",
    material: "Grade 5 Lightweight Beta-Titanium Core",
    description: "Exquisite micro suture driver highlighting a pen-like round body and reliable click-lock spring shanks for 8-0 to 11-0 ophthalmic wire.",
    approxPrice: 880,
    specs: [
      "Total Length: 140mm fine profile",
      "Jaw Type: Extra-delicate 0.3mm wide flat jaws",
      "Lock Mechanism: Push-button manual spring lock",
      "Weight: Super-light 8.2 grams"
    ],
    features: [
      "Symmetrical round profile enables easy thumb-roll movements",
      "Titanium build maximizes microkinetic tactile return to fingers",
      "Ultra-fine tip tolerances prevent needle crushing or twisting"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "oph-702",
    name: "Iris Micro-Scissors (Extremely Fine Curved)",
    category: SurgicalCategory.OPHTHALMIC,
    sku: "SC-OPH-702-IMS",
    material: "Sapphire-Honed Single-Crystal Steel Blades",
    description: "Ultra-fine curved scissors engineered for delicate iridectomy, capsulotomy, and minute corneal tissue adjustments with zero shear resistance.",
    approxPrice: 410,
    specs: [
      "Total Length: 95mm",
      "Blade Shape: Delicate curved sharp-sharp blade tips",
      "Blade length: 12mm micro cutting edge",
      "Joint assembly: Precision-screwed pivot hinge"
    ],
    features: [
      "Single-crystal steel formula provides incredibly acute edge durability",
      "Small ring finger loops provide comfort and high spatial accuracy",
      "Atraumatic blade glide eliminates tissue-bunching during micro cuts"
    ],
    iconName: "Scissors"
  },
  {
    id: "oph-703",
    name: "Barraquer Wire Eye Speculum",
    category: SurgicalCategory.OPHTHALMIC,
    sku: "SC-OPH-703-WES",
    material: "Polished Spring-Tempered Premium Wire Alloy",
    description: "Featherlight, open-blade spring wire speculum designed to expand the eyelid during cataract extraction with minimal scleral pressure.",
    approxPrice: 165,
    specs: [
      "Total Length: 40mm micro dimensions",
      "Blade Width: 15mm open wire blades",
      "Spring strength: Calibrated 0.25N constant pressure",
      "Weight: Zero-gravity 1.8 grams"
    ],
    features: [
      "Atraumatic open-wire profile stays completely out of clear tool paths",
      "Balanced spring constant removes lid tension without pulling skin",
      "Simple single-solid design prevents debris pockets from building"
    ],
    iconName: "Maximize2"
  },
  {
    id: "oph-704",
    name: "Ophthalmic Eye Forceps (Graefe Pattern)",
    category: SurgicalCategory.OPHTHALMIC,
    sku: "SC-OPH-704-GF",
    material: "Low-反射 Electropolished Satin Steel",
    description: "Fine, spring-handled eye forceps with localized micro platform tips to grip minute conjunctiva folders and fine ocular membranes.",
    approxPrice: 195,
    specs: [
      "Total Length: 105mm",
      "Tip Shape: Straight 0.5mm flat platforms",
      "Deflection mechanism: Spring shanks with aligning pins",
      "Finish: Double-satin non-bounce buff"
    ],
    features: [
      "Satin coating shields surgeon's eyes from microscopy light reflections",
      "Guide pin locks tips vertically to bypass scissor-crossing errors",
      "Grip platform allows double suture-tying helper operations"
    ],
    iconName: "Compass"
  },

  // ==========================================
  // 7. CARDIOVASCULAR SURGERY
  // ==========================================
  {
    id: "cv-801",
    name: "DeBakey Vascular Forceps",
    category: SurgicalCategory.CARDIOVASCULAR,
    sku: "SC-CV-801-DVF",
    material: "Satin Surgical Titanium Composite Core",
    description: "The gold standard vascular forceps containing non-crushing longitudinal ribs and grooved teeth for secure, atraumatic vascular manipulation.",
    approxPrice: 340,
    specs: [
      "Total Length: 195mm",
      "Jaw Width: 1.5mm fine DeBakey serrations",
      "Tip structure: Double fine parallel rows",
      "Finish: Low-glare satin titanium look"
    ],
    features: [
      "Longitudinal rib alignment prevents arterial tearing or wall bruising",
      "Calibrated soft-spring feedback keeps user palm pressure low",
      "Antimagnetic frame protects against active magnetic sensor bias"
    ],
    iconName: "Compass"
  },
  {
    id: "cv-802",
    name: "Satinsky Anastomosis Clamp (Angled)",
    category: SurgicalCategory.CARDIOVASCULAR,
    sku: "SC-CV-802-SAC",
    material: "High-Impedance Austenitic Chromium-Nickel Alloy",
    description: "Angled cardiovascular occlusion clamp used for partial side-clamping of the vena cava or aorta without halting main systemic flow.",
    approxPrice: 850,
    specs: [
      "Total Length: 220mm angled reach",
      "Jaw type: Deep curved offset DeBakey atraumatic teeth",
      "Shaft structure: Ring-handled box joint pivot",
      "Ratchet: Precision 8-stage fine ratchet lock"
    ],
    features: [
      "Gradual fine-tooth ratchet locks vessel safely with fractional control",
      "Angled offset profile keeps the clamp handles flat and out of active paths",
      "Passivated surface handles dense medical enzyme pre-wash baths"
    ],
    iconName: "Activity"
  },
  {
    id: "cv-803",
    name: "Vascular Aneurysm Needle (Right-Angled)",
    category: SurgicalCategory.CARDIOVASCULAR,
    sku: "SC-CV-803-AN",
    material: "Tempered Hand-Honed Mirror-Finish Steel",
    description: "Slender right-angled probe with a blunt, micro-polished suture eye at the tip, designed to feed ligation thread behind major vessels.",
    approxPrice: 230,
    specs: [
      "Total Length: 210mm",
      "Tip configuration: Right-angled 90° curved blunt tip",
      "Eye dimensions: 1.2M x 0.8mm smooth suture groove",
      "Handle style: Solid flat-ribbed thumb-hold sheet"
    ],
    features: [
      "Mirror-honed suture eye bypasses thread wear and prevents fraying",
      "Smooth curved neck passes non-traumatically through tissue",
      "Balanced tool weight aligns center of pressure to the index finger"
    ],
    iconName: "GitCommit"
  },
  {
    id: "cv-804",
    name: "Suture Vessel Dilator (Double Ended)",
    category: SurgicalCategory.CARDIOVASCULAR,
    sku: "SC-CV-804-SVD",
    material: "High-Elastic Medical Grade Cobalt Alloy",
    description: "Double-ended vascular dilator providing microscopic, non-shearing expansion of delicate blood vessels during vessel anastomosis.",
    approxPrice: 185,
    specs: [
      "Total Length: 190mm",
      "Tip diameters: 0.5mm point / 1.0mm point smooth taper",
      "Taper length: 15mm gradual clinical taper",
      "Handle style: Knurled cylinder middle grip"
    ],
    features: [
      "Elastic alloy construction protects probe shaft from lateral breakage",
      "Electroformed rounded tips are polished to less than 0.1-micron roughness",
      "Symmetrical structure enables instant dual-sided clinical scale switching"
    ],
    iconName: "GitCommit"
  },

  // ==========================================
  // 8. NEUROSURGERY
  // ==========================================
  {
    id: "ns-901",
    name: "Kerrison Detachable Bone Rongeur",
    category: SurgicalCategory.NEUROSURGERY,
    sku: "SC-NS-901-KBR",
    material: "DLC-Coated Medical Steel & Titanium Nitride Accents",
    description: "Industry-elite neurosurgical laminectomy rongeur with a 40° up-bite and fully detachable slider frame for high-power bony decompression.",
    approxPrice: 1250,
    specs: [
      "Total Length: 200mm shaft",
      "Bite profile: 2mm up-bite 40° angle jaw",
      "Coating: Diamond-Like Carbon (DLC) low-wear slide coatings",
      "Detachment mechanism: One-click thumb release slide"
    ],
    features: [
      "One-click release allows instant disassembly to wash trapped bony tissue",
      "Sharp slice action limits fracture vibration transfer to nearby nerves",
      "DLC slider coating reduces drag torque in the cutting shaft"
    ],
    iconName: "Wrench"
  },
  {
    id: "ns-902",
    name: "Malleable Brain Spatula (Satin Chrome)",
    category: SurgicalCategory.NEUROSURGERY,
    sku: "SC-NS-902-MBS",
    material: "Laminated Pure Pliable Soft Silver Alloy Core",
    description: "Highly malleable brain spatula designed to be custom-molded on the fly, providing gentle, tremor-free support on cerebral cortex systems.",
    approxPrice: 195,
    specs: [
      "Total Length: 200mm",
      "Blade Width: Double ended 10mm / 15mm wide fields",
      "Profile: Flat semi-malleable ribbon plate",
      "Weight: Lightweight 11 grams"
    ],
    features: [
      "Soft silver composition retains custom bends without spring-back risk",
      "Satin chrome shield prevents bright fiber-optic glare inside cranial cavities",
      "Honed smooth margins eliminate localized pressure spots on parenchymal brain cells"
    ],
    iconName: "Layers"
  },
  {
    id: "ns-903",
    name: "Micro-Neurosurgical Forceps (Bayonet)",
    category: SurgicalCategory.NEUROSURGERY,
    sku: "SC-NS-903-MNF",
    material: "Lightweight High-Tensile Titanium Spring Alloy",
    description: "Bayonet-offset micro forcep engineered to keep the hand and fingers completely out of the visualization corridor during microneurosurgery.",
    approxPrice: 380,
    specs: [
      "Total Length: 210mm bayonet layout",
      "Tip size: 0.5mm micro straight tips",
      "Offset length: 65mm vertical handle rise",
      "Grip: Wide scalloped spring handle plates"
    ],
    features: [
      "Bayonet offset guarantees clear line of sight through clinical microscopes",
      "Ultra-delicate spring rates avoid fingertip tremors under magnifying lenses",
      "Non-conductive surface layer stops stray current bypass under diathermy"
    ],
    iconName: "Compass"
  },
  {
    id: "ns-904",
    name: "Flexible Nerve Hook (Dandy Pattern)",
    category: SurgicalCategory.NEUROSURGERY,
    sku: "SC-NS-904-NH",
    material: "Tempered Austenitic Surgical Stainless Steel",
    description: "Classic fine nerve hook with a highly polished spherically blunt tip, designed to explore and isolate delicate nerve endings without micro tissue scratching.",
    approxPrice: 180,
    specs: [
      "Total Length: 200mm long reach",
      "Tip offset: 4.5mm clean 90° hook curve",
      "Tip Profile: Fully polished ball-tipped end (0.8mm sphere)",
      "Handle style: Round textured knurled stem"
    ],
    features: [
      "Blunt spherical tip prevents unintended tearing of cranial nerve tissue",
      "Slender shaft maintains ideal tactile feel of elastic nerve sheaths",
      "Single-forge geometry resists micro-fractures under mechanical stress load"
    ],
    iconName: "GitCommit"
  },

  // ==========================================
  // 9. UROLOGY
  // ==========================================
  {
    id: "ur-1011",
    name: "Urethral Sound Set (Van Buren Curved)",
    category: SurgicalCategory.UROLOGY,
    sku: "SC-UR-1011-VBS",
    material: "Heavy Solid-Core Electropolished Carbon Stainless Steel",
    description: "A professional collection of medical-grade curved dilating sounds with a smooth taper, designed to safe-guide and dilate urethral strictures.",
    approxPrice: 420,
    specs: [
      "Set Contents: 6 individual graduated sound tubes",
      "Calibrations: French sizes 8 Fr to 22 Fr scales",
      "Profile: Classic Van Buren curved neck and bulb tip",
      "Finish: Mirror-polished high-glide clinical finish"
    ],
    features: [
      "Seamless solid-core build removes internal flex risks during insertion",
      "Fully polished ends ensure minimal friction values along mucosal surfaces",
      "Fitted with clean, flat finger indicators on handles explaining French caliber"
    ],
    iconName: "Layers"
  },
  {
    id: "ur-1012",
    name: "Graduated Urethral Dilator",
    category: SurgicalCategory.UROLOGY,
    sku: "SC-UR-1012-GUD",
    material: "Satin Titanium-Treated Semi-Flexible Alloy Core",
    description: "Graduated single-stem flexible dilator fitted with micro depth indicator markings for progressive clinical tissue relaxation.",
    approxPrice: 190,
    specs: [
      "Total Length: 340mm",
      "Diameter Scale: Tapered body from 6 Fr to 14 Fr",
      "Depth gauges: Ring laser line marks at 20mm intervals",
      "Shaft flexibility: Semi-flexible high-elastic return"
    ],
    features: [
      "Continuous gradual taper reduces patient discomfort during stricture dilation",
      "Depth control lines show position on camera frames",
      "Clean passivated metal skin is fully inert in sterile body channels"
    ],
    iconName: "GitCommit"
  },
  {
    id: "ur-1013",
    name: "Aneurysm-Core Catheter Guide Wire",
    category: SurgicalCategory.UROLOGY,
    sku: "SC-UR-1013-GW",
    material: "Nitinol Super-Elastic Wire with Hydrophilic Coating",
    description: "High-grade companion guidewire designed for catheter tracking, highlighting a kink-resistant Nitinol core and a low-glance soft tip.",
    approxPrice: 130,
    specs: [
      "Total Length: 450mm extended guide standard",
      "Core thickness: 0.8mm multi-elastic wire",
      "Coating: Hydrophilic anti-friction clinical layer",
      "Tip flexibility: Super-soft floppy floppy tip"
    ],
    features: [
      "Kink-resistant Nitinol center returns to original form under sharp loops",
      "Hydrophilic surface reduces insertion friction by up to 80% when wet",
      "Gold-lined coil end matches radiopaque vascular x-ray frames"
    ],
    iconName: "GitCommit"
  },
  {
    id: "ur-1014",
    name: "Cystoscopic Forceps (Flexible Grasping)",
    category: SurgicalCategory.UROLOGY,
    sku: "SC-UR-1014-CF",
    material: "Braided Coaxial Multi-Strand Stainless Steel Wire",
    description: "Extra-long, ultra-slender flexible forceps with micro alligator-jaws designed to feed through urological cystoscopy channels.",
    approxPrice: 690,
    specs: [
      "Working Length: 400mm deep reach core",
      "Channel diameter: Fits 5 French channels (1.6mm thickness)",
      "Jaw Configuration: Interlocking serrated alligator micro-cups",
      "Drive Mechanism: Dual wire pull-ring grip handle"
    ],
    features: [
      "Extremely long flex-shaft translates handle motions directly to jaw tips",
      "Double-braided layout avoids wire loop binding in curved endoscopic tubes",
      "Sealed sanitary fluid barriers completely block blood-fluid intake"
    ],
    iconName: "Wrench"
  },

  // ==========================================
  // 10. PLASTIC & RECONSTRUCTIVE SURGERY
  // ==========================================
  {
    id: "pl-1111",
    name: "Fine Tissue Adson Forceps (Non-Toothed)",
    category: SurgicalCategory.PLASTIC,
    sku: "SC-PL-1111-ATF",
    material: "Electropolished Hardened German Surgical Steel",
    description: "Ultra-precise non-toothed forceps with deep serration pads at the point, crafted for delicate aesthetic adjustment and skin margin support.",
    approxPrice: 180,
    specs: [
      "Total Length: 120mm",
      "Tip size: 0.5mm blunt serrated plates",
      "Tension curve: Balanced spring back at 0.8 Newtons",
      "Grip structure: Ribbed broad safety pads"
    ],
    features: [
      "Non-toothed design eliminates puncturing marks on facial cosmetic flaps",
      "Soft spring rate eliminates hand tremors and muscle tension during sutures",
      "Symmetric guidance pin blocks tip-crossing under firm finger pinches"
    ],
    iconName: "Compass"
  },
  {
    id: "pl-1112",
    name: "Metzenbaum-Fino Micro Scissors",
    category: SurgicalCategory.PLASTIC,
    sku: "SC-PL-1112-MFM",
    material: "Vacuum-Tempered High-Honed Cobalt-Alloy Steel",
    description: "Slender-profile curved micro scissors with extremely fine needle-sharp tips, designed for dissection of facial skin tissue under high magnification.",
    approxPrice: 310,
    specs: [
      "Total Length: 145mm fine size",
      "Blade Profile: Slim curved sharp-sharp points",
      "Hinge Joint: Solid hand-aligned box screw",
      "Cut life: Tested to 12,000 incisions through micro tissue"
    ],
    features: [
      "Needle-sharp blades enable absolute accuracy for reconstruction seams",
      "Micro-aligned screw limits operational scissor blade wobble",
      "Double satin clinical skin removes light reflections from microscope lamps"
    ],
    iconName: "Scissors"
  },
  {
    id: "pl-1113",
    name: "Gillies Skin Hook (Single Fine)",
    category: SurgicalCategory.PLASTIC,
    sku: "SC-PL-1113-GSH",
    material: "Tempered Spring steel with Satin Polishing",
    description: "Single-fine surgical skin hook designed to hold back subdermal fat layers and aesthetic dermis during localized plastic repair.",
    approxPrice: 125,
    specs: [
      "Total Length: 180mm",
      "Hook aperture: 3mm micro curve radius",
      "Tip shape: Extra-fine needle sharp point",
      "Handle style: Fluted hexagonal pen grip"
    ],
    features: [
      "Slight structural springiness absorbs accidental hand movements during retraction",
      "Superb tip grind enables easy entry with minimum skin tear footprint",
      "Knurled handle ridges allow easy tool rotations in the workspace"
    ],
    iconName: "GitCommit"
  },
  {
    id: "pl-1114",
    name: "Neivert Suture Needle Holder",
    category: SurgicalCategory.PLASTIC,
    sku: "SC-PL-1114-NNH",
    material: "Tungsten Carbide Embedded Jaw & Stainless Shafts",
    description: "The gold-standard needle driver for plastic surgery, containing smooth flat jaw liners optimized for holding 5-0 to 7-0 micro-nylon sutures.",
    approxPrice: 290,
    specs: [
      "Total Length: 130mm compact size",
      "Jaw style: Non-serrated flat tungsten carbide sheets",
      "Hinge pattern: Enclosed slide box joint",
      "Catch: 2-step soft-release click ratchet"
    ],
    features: [
      "Highly polished flat jaw walls prevent scarring of fine medical threads",
      "Slightly weighted lower finger loops optimize leverage in active suture lines",
      "Beveled joint hinges stop fine thread catching under high-speed looping"
    ],
    iconName: "ShieldCheck"
  },

  // ==========================================
  // 11. LAPAROSCOPIC SURGERY
  // ==========================================
  {
    id: "lap-1211",
    name: "Laparoscopic Grasper (360° Rotating)",
    category: SurgicalCategory.LAPAROSCOPIC,
    sku: "SC-LAP-1211-LG",
    material: "Coaxial Insulated Steel Shaft & Carbon Resin Handle",
    description: "Extra-long modular endoscopic grasper with a high-integrity electrical insulation tube and full 360-degree fingertip rotation knob.",
    approxPrice: 850,
    specs: [
      "Shaft diameter: 5mm standard port fit",
      "Working Length: 330mm endoscopic reach",
      "Jaw: Double-action fenestrated grasping jaw",
      "Rotation: Continuous 360° indexed rolling dial"
    ],
    features: [
      "Continuous 360° rotation knob allows single-handed jaw angling adjustments",
      "Dielectric poly-insulator tube shields non-active tissue during electrocautery",
      "Modular components can be fully disassembled for cleaning"
    ],
    iconName: "Wrench"
  },
  {
    id: "lap-1212",
    name: "Laparoscopic Metzenbaum Scissors Shear",
    category: SurgicalCategory.LAPAROSCOPIC,
    sku: "SC-LAP-1212-LM",
    material: "Insulated Stainless Shaft & Curved Tungsten Shear Blades",
    description: "Endoscopic shear fitted with curved scissors blades and high-frequency electrocautery cable port, calibrated for precise tissue sectioning.",
    approxPrice: 780,
    specs: [
      "Shaft dimensions: 5mm thick / 330mm long scale",
      "Blade Profile: Micro Metzenbaum curved scissors",
      "Connector: Male gold HF connector terminal",
      "Cutting Rating: Up to 8,000 surgical tissue cuts"
    ],
    features: [
      "Combines cutting and hemostatic welding traits inside one tool shaft",
      "Tactile pistol grip handle gives solid haptic response regarding tissue density",
      "Seamless hinge seals prevent biological fluid entry into internal shafts"
    ],
    iconName: "Scissors"
  },
  {
    id: "lap-1213",
    name: "Disposable Trocar Cannula Set",
    category: SurgicalCategory.LAPAROSCOPIC,
    sku: "SC-LAP-1213-TCS",
    material: "Medical grade PVC, Silicone Valve & Stainless needle",
    description: "High-grade sterile trocar cannister fitted with an airtight double-silicone gas sealing gasket to stabilize pneumoperitoneum.",
    approxPrice: 220,
    specs: [
      "Port caliber: 10mm interior corridor scale",
      "Cannula Length: 100mm surgical depth adapter",
      "Seals: Multi-aperture silicone non-backflow valves",
      "Gas inlet: Standard Luer-lock stopcock"
    ],
    features: [
      "Multi-fit silicone membranes protect against gas leakages during tools changes",
      "Transparent sleeve design displays active tool positions down the canal",
      "Ribbed sleeve threads ensure high stability in abdominal muscular walls"
    ],
    iconName: "Maximize2"
  },
  {
    id: "lap-1214",
    name: "Laparoscopic Needle Holder (Pistol)",
    category: SurgicalCategory.LAPAROSCOPIC,
    sku: "SC-LAP-1214-LNH",
    material: "Coaxial Carbon Spring Core & Tungsten Insert Jaws",
    description: "Inovative inline vertical needle driver with an ergonomic pistol handhold and a linear mechanical ratchet for deep suture locking.",
    approxPrice: 920,
    specs: [
      "Shaft sizes: 5mm caliber / 330mm length",
      "Jaw pattern: Left-curved high-grip needle jaws",
      "Handle style: Inline vertical pistol lever",
      "Locking: Spring-loaded self-clamping ratchet scale"
    ],
    features: [
      "Pistol grip distributes squeeze force over large palm muscle layers",
      "Serrated tungsten carbide jaw tips grasp micro suture needles with zero slips",
      "Quick-squeeze trigger release lets the user unlock sewing paths instantly"
    ],
    iconName: "ShieldCheck"
  },

  // ==========================================
  // 12. THORACIC SURGERY
  // ==========================================
  {
    id: "th-1311",
    name: "Surgical Rib Shears (Bethune Pattern)",
    category: SurgicalCategory.THORACIC,
    sku: "SC-TH-1311-BRS",
    material: "High-Stress Forged Carbon-Steel Core & Stainless Plates",
    description: "Surgical rib cutting shears featuring progressive multi-pivot compound levers designed to slicecostal cartilage with high mechanical ease.",
    approxPrice: 720,
    specs: [
      "Total Length: 340mm heavy scale",
      "Blade Shape: Splayed bone-clamping curved blade",
      "Drive Mechanism: Multi-pivot compound mechanical levers",
      "Torsional strength: Calibrated for heavy bone loading"
    ],
    features: [
      "Multiple pivot points generate up to 4x force magnification",
      "Deeply hollowed lower blade stabilizes bone shaft under high stress cut",
      "Finished with clinical matte passivating to stop bone fragments fusion"
    ],
    iconName: "Scissors"
  },
  {
    id: "th-1312",
    name: "Finochietto Thoracic Rib Spreader",
    category: SurgicalCategory.THORACIC,
    sku: "SC-TH-1312-FRS",
    material: "Mirror-Polished Heavy Austenitic Steel & Chrome Gear",
    description: "Substantial mechanical retractor fitted with wide chest blades and a precision worm-drive bar to expand and stabilize thoracic incisions safely.",
    approxPrice: 1290,
    specs: [
      "Maximum spread: 210mm wide opening range",
      "Blade Width: Dual 60mm x 65mm deep curved chest blades",
      "Drive: Heavy-duty horizontal sliding rack gear",
      "Grip: Detachable multi-turn steel crank handle"
    ],
    features: [
      "Deep chest blade angles avoid slipping under high chest wall pressure load",
      "Polished slider gears prevent sudden jumps or involuntary releases",
      "Curved structural ribs adapt comfortably to standard human anatomy"
    ],
    iconName: "Maximize2"
  },
  {
    id: "th-1313",
    name: "Sauerbruch Thoracic Seizing Forceps",
    category: SurgicalCategory.THORACIC,
    sku: "SC-TH-1313-STF",
    material: "High-Calibre Surgical Grade Cobalt-Nickel Alloy",
    description: "Dual-angled forceps featuring textured ring jaws, crafted specifically to reach and clamp deep pulmonary tissues and bronchus structures.",
    approxPrice: 390,
    specs: [
      "Total Length: 260mm deep lung reach",
      "Jaw: Fenestrated serrated broad loop jaw",
      "Joint Type: Rigid triple-bolted box joiner",
      "Ratchet: Precision multi-position click ratchet"
    ],
    features: [
      "Extended dual-angle shank offsets hand profiles from microscopic views",
      "Fenestrated jaw walls offer solid grip without crushing soft lung parenchyma",
      "Polished to mirror level to prevent biological carbon adhesion risks"
    ],
    iconName: "Compass"
  },
  {
    id: "th-1314",
    name: "Allison Lung Retractor (Spatula Shape)",
    category: SurgicalCategory.THORACIC,
    sku: "SC-TH-1314-ALR",
    material: "Super-Elastic Spring-Honed Stainless Steel Alloy",
    description: "Spatula-style thoracic paddle with a delicate wire-loop frame, designed to compress and hold back sensitive lung lobes during heart surgery.",
    approxPrice: 310,
    specs: [
      "Total Length: 300mm",
      "Paddle dimensions: 45mm x 95mm spatula pad",
      "Shaft Profile: Fully rounded malleable support",
      "Weight: Intricately balanced 42 grams"
    ],
    features: [
      "Elastic wire-frame pad spreads hold pressure to block cellular death",
      "Malleable shaft neck allows custom ergonomic hand angling offsets",
      "Satin finish protects active camera systems from diagnostic glare issues"
    ],
    iconName: "Layers"
  },

  // ==========================================
  // 13. GENERAL OPERATING ROOM INSTRUMENTS
  // ==========================================
  {
    id: "or-1411",
    name: "Premium Kidney Tray (250mm)",
    category: SurgicalCategory.OPERATING_ROOM,
    sku: "SC-OR-1411-KT",
    material: "Seamless 18/10 Chromium-Nickel Stainless Steel (Grade 304)",
    description: "Seamless clinical kidney-shaped receiver tray featuring zero weld zones, optimized for sterile tool storage and medical waste collection.",
    approxPrice: 65,
    specs: [
      "Total Length: 250mm x 140mm wide body scale",
      "Depth: 40mm uniform recessed walls",
      "Rim style: Flanged safety smooth rolled edge",
      "Sterilization: Hot dry heat and autoclave safe (134°C)"
    ],
    features: [
      "Single-piece seamless metal layout deletes bacteria trap lines",
      "Flanged perimeter rim offers a stable, secure, non-slip hand grip",
      "Fully resistant to strong chemical cleaning solutions and biological enzymes"
    ],
    iconName: "Layers"
  },
  {
    id: "or-1412",
    name: "Instrument Tray with Perforated Lid",
    category: SurgicalCategory.OPERATING_ROOM,
    sku: "SC-OR-1412-ITP",
    material: "High-Impact Heavy-Gauge Surgical Austenitic Steel",
    description: "Modular surgical instrument storage container equipped with micro perforated side ventilation holes and secure heavy compression latch locks.",
    approxPrice: 145,
    specs: [
      "Dimensions: 300mm x 200mm x 60mm storage frame",
      "Perforations: 2.0mm micro-steam vent pattern",
      "Handles: Dual folding vertical drop grips",
      "Latches: Secure spring-loaded toggle clips"
    ],
    features: [
      "Bilateral perforated side plates enable perfect steam flow under autoclaves",
      "Interlocking stack notches on lid allow orderly shelf organization",
      "Ultra-thick metal plates resist dropping distortion and thermal stress warp"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "or-1413",
    name: "Sterilization Sponge Bowl",
    category: SurgicalCategory.OPERATING_ROOM,
    sku: "SC-OR-1413-SB",
    material: "Double-Wall Insulated Seamless Steel Plate",
    description: "Spherically shaped surgical sponge cup fitted with a wide base stand, engineered to contain warm sterile saline fluids and pre-wash sponges.",
    approxPrice: 55,
    specs: [
      "Diameter: 125mm broad neck opening",
      "Liquid Volume: 500mL clinical capacity scale",
      "Base style: Wide flanged non-tilt bottom rim",
      "Wall: Double-wall insulating metal layer"
    ],
    features: [
      "Insulated double metalloid layers maintain sterilizing saline warmth during procedures",
      "Zero-tilt flanged bottom prevents workspace spill hazards",
      "Seamless interior lets standard wipes wash the metal cleanly"
    ],
    iconName: "Layers"
  },
  {
    id: "or-1414",
    name: "Mobile Mayo Instrument Stand",
    category: SurgicalCategory.OPERATING_ROOM,
    sku: "SC-OR-1414-MS",
    material: "Electropolished Steel Stand & Silent Antistatic Casters",
    description: "State-of-the-art height-adjustable operating room table fitted with flat tray slides, pneumatic foot lift controls, and static-free clinical casters.",
    approxPrice: 480,
    specs: [
      "Tray plate dimensions: 480mm x 330mm removable tray plate",
      "Height range: 850mm to 1350mm pedal elevation bounds",
      "Action: Double-balanced gas-lift canister cylinder",
      "Casters: Tri-wheel antistatic medical rolls"
    ],
    features: [
      "Foot brake pedal permits hands-free table elevation adjustments",
      "Removable top dish allows rapid post-op chemical sanitation",
      "Anti-spark roller bearings prevent electrostatic hazards in anesthesia spaces"
    ],
    iconName: "Maximize2"
  }
];
