import { createFileRoute } from "@tanstack/react-router";
import { LegalBody } from "@/components/site/LegalBody";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — IAMD" },
      {
        name: "description",
        content:
          "Terms and conditions governing the use of the Indian Association of Muscular Dystrophy website, patient registration, bookings and donations.",
      },
      { property: "og:title", content: "Terms & Conditions — IAMD" },
      {
        property: "og:description",
        content:
          "Terms for using the IAMD website, registering patients, booking visits at IMDRC Solan and making donations.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms before registering a patient, booking a visit or making a donation to the Indian Association of Muscular Dystrophy."
      />
      <LegalBody>
        <p>Last updated: 8 August 2026</p>

        <h2>About us</h2>
        <p>
          The Indian Association of Muscular Dystrophy (IAMD) is a registered non-profit society
          established in 1992, operating the Integrated Muscular Dystrophy Rehabilitation Centre
          (IMDRC) at Manav Mandir, Solan, Himachal Pradesh 173212.
        </p>

        <h2>Use of this website</h2>
        <p>
          Content on this website is provided for general information and awareness. It is not a
          substitute for professional medical advice, diagnosis or treatment. Always consult a
          qualified neurologist or physician regarding a medical condition.
        </p>

        <h2>Patient registration and bookings</h2>
        <ul>
          <li>Registration is a request; admission depends on assessment and availability.</li>
          <li>
            Information provided must be accurate. Incomplete medical history may delay or affect
            the care plan.
          </li>
          <li>
            Charges published on the price list are indicative and confirmed by a coordinator at the
            time of booking.
          </li>
          <li>
            Patients and caregivers agree to follow centre rules relating to safety, therapy
            schedules and shared facilities.
          </li>
        </ul>

        <h2>Donations</h2>
        <p>
          Donations are voluntary and are applied to patient rehabilitation and the running of IMDRC.
          Receipts eligible for exemption under Section 80G of the Income Tax Act are issued for
          every contribution.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Text, photographs and material on this site belong to IAMD unless otherwise stated. Please
          seek written permission before reproducing them, particularly patient photographs.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          IAMD is not liable for indirect or consequential loss arising from use of this website or
          reliance on its general information content.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India, with jurisdiction in the courts of Solan,
          Himachal Pradesh.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms: info@iamd.in or 01792 292037.
        </p>
      </LegalBody>
    </>
  );
}
