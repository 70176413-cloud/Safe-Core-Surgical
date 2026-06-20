/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum SurgicalCategory {
  GENERAL = "General Surgery",
  ORTHOPEDIC = "Orthopedic Surgery",
  ENT = "ENT (Ear, Nose & Throat)",
  GYNECOLOGY = "Gynecology & Obstetrics",
  DENTAL = "Dental & Oral Surgery",
  OPHTHALMIC = "Ophthalmic (Eye Surgery)",
  CARDIOVASCULAR = "Cardiovascular Surgery",
  NEUROSURGERY = "Neurosurgery",
  UROLOGY = "Urology",
  PLASTIC = "Plastic & Reconstructive Surgery",
  LAPAROSCOPIC = "Laparoscopic Surgery",
  THORACIC = "Thoracic Surgery",
  OPERATING_ROOM = "General Operating Room Instruments"
}

export interface SurgicalInstrument {
  id: string;
  name: string;
  category: SurgicalCategory;
  sku: string;
  material: string;
  description: string;
  approxPrice: number;
  specs: string[];
  features: string[];
  iconName: string;
}

export interface QuoteItem {
  instrument: SurgicalInstrument;
  quantity: number;
}

export interface QuoteRequest {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  tier: "Standard Clinical" | "Elite Hospital System" | "Global Distributor";
  notes: string;
}
