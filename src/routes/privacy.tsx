import { createFileRoute } from "@tanstack/react-router";
import { LegalBody } from "@/components/site/LegalBody";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — IAMD" },
      {
        name: "description",
        content:
          "How the Indian Association of Muscular Dystrophy collects, uses and protects patient, donor and volunteer information, including medical data and consent for photographs.",
      },
      { property: "og:title", content: "Privacy Policy — IAMD" },
      {
        property: "og:description",
        content:
          "Our commitments on patient medical data, donor records, consent for photographs and data retention.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Patient and family information is sensitive. This policy explains what we collect, why, and the limits we place on how it is used."
      />
      <LegalBody>
        <p>Last updated: 8 August 2026</p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            Patient details: name, age, gender, city, diagnosis, mobility status, medical history and
            reports you choose to share.
          </li>
          <li>Contact details: phone number and email address of the patient or caregiver.</li>
          <li>Donor details: name, contact information, PAN (for 80G receipts) and amount.</li>
          <li>Volunteer details: name, contact information, skills and availability.</li>
        </ul>

        <h2>How we use it</h2>
        <p>
          Information is used to assess patients, plan and deliver rehabilitation, issue receipts,
          fulfil statutory reporting obligations, and communicate with you about your registration,
          booking, donation or volunteering.
        </p>

        <h2>Medical information</h2>
        <p>
          Medical data is accessible only to the IMDRC care team and is never sold or shared for
          marketing. Anonymised, aggregated data may be used in reports about the centre's work.
        </p>

        <h2>Photographs and stories</h2>
        <p>
          Patient photographs and success stories are published only with the consent of the patient
          or their guardian. Consent can be withdrawn at any time by writing to info@iamd.in and we
          will remove the material.
        </p>

        <h2>Payments</h2>
        <p>
          Donations and payments are processed by third-party payment gateways. We do not store card
          numbers, UPI credentials or bank passwords on our systems.
        </p>

        <h2>Retention and security</h2>
        <p>
          Records are retained for as long as needed for care continuity and statutory compliance.
          Access is restricted to authorised staff, and physical records are held securely at IMDRC.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request a copy of the information we hold about you, ask for corrections, or ask us
          to delete non-statutory records. Write to info@iamd.in.
        </p>

        <h2>Contact</h2>
        <p>
          IAMD, IMDRC, Manav Mandir, Solan, Himachal Pradesh 173212 · info@iamd.in · 01792 292037.
        </p>
      </LegalBody>
    </>
  );
}
