import { createFileRoute } from "@tanstack/react-router";
import { LegalBody } from "@/components/site/LegalBody";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy — IAMD" },
      {
        name: "description",
        content:
          "How IAMD delivers 80G donation receipts, acknowledgement letters, awareness material and assistive equipment sponsored by donors.",
      },
      { property: "og:title", content: "Shipping & Delivery Policy — IAMD" },
      {
        property: "og:description",
        content:
          "Delivery timelines for donation receipts, awareness material and sponsored assistive equipment.",
      },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Shipping & Delivery Policy"
        description="IAMD does not sell products. This policy covers the delivery of receipts, acknowledgements, awareness material and sponsored equipment."
      />
      <LegalBody>
        <p>Last updated: 8 August 2026</p>

        <h2>Donation receipts</h2>
        <ul>
          <li>
            A digital acknowledgement is emailed immediately on successful payment.
          </li>
          <li>
            The Section 80G exemption receipt is emailed within 3 working days to the address given
            at the time of donation.
          </li>
          <li>
            A physical receipt or acknowledgement letter can be posted on request and is normally
            dispatched within 7 working days by Indian Post or courier.
          </li>
        </ul>

        <h2>Awareness material</h2>
        <p>
          Booklets, posters and camp material requested by schools, colleges, hospitals or partner
          organisations are dispatched within 7–10 working days across India. Postage is borne by
          IAMD.
        </p>

        <h2>Sponsored assistive equipment</h2>
        <p>
          Wheelchairs, splints, standing frames and similar equipment sponsored for a specific
          patient are handed over at IMDRC Solan, or shipped to the patient's registered address
          within 15–30 working days depending on fabrication and fitting requirements.
        </p>

        <h2>Delays and issues</h2>
        <p>
          Deliveries may be delayed by weather, courier disruption or remote-area access, which is
          common in hill districts. If something has not reached you, write to info@iamd.in with the
          transaction or reference number and we will trace it.
        </p>

        <h2>Contact</h2>
        <p>
          IAMD, IMDRC, Manav Mandir, Solan, Himachal Pradesh 173212 · info@iamd.in · 01792 292037.
        </p>
      </LegalBody>
    </>
  );
}
