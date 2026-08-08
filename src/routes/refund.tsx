import { createFileRoute } from "@tanstack/react-router";
import { LegalBody } from "@/components/site/LegalBody";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — IAMD" },
      {
        name: "description",
        content:
          "How to cancel or reschedule a booking at IMDRC Solan, and the refund policy for advance stay payments and donations made to IAMD.",
      },
      { property: "og:title", content: "Cancellation & Refund Policy — IAMD" },
      {
        property: "og:description",
        content:
          "Cancellation windows for rehabilitation bookings and how refunds of advances and mistaken donations are handled.",
      },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cancellation & Refund Policy"
        description="Plans change, especially when a patient's health changes. This policy explains how cancellations, rescheduling and refunds work."
      />
      <LegalBody>
        <p>Last updated: 8 August 2026</p>

        <h2>Cancelling or rescheduling a visit</h2>
        <ul>
          <li>
            Cancellations notified at least 7 days before the scheduled arrival date: any advance
            paid is refunded in full or carried forward to a new date.
          </li>
          <li>
            Cancellations notified 3–7 days before arrival: 50% of the advance is refunded, or the
            full amount can be carried forward once to a new date.
          </li>
          <li>
            Cancellations notified within 72 hours of arrival, or non-arrival without notice: the
            advance is not refunded, as the room and therapy slots are held for you.
          </li>
          <li>
            Medical emergencies: on receipt of supporting documentation the advance is refunded in
            full regardless of the notice period.
          </li>
        </ul>

        <h2>Early departure</h2>
        <p>
          If a patient leaves before completing the booked cycle, charges are applied for the days
          stayed and therapy sessions used; the balance of any advance is refunded.
        </p>

        <h2>Donations</h2>
        <p>
          Donations are voluntary and generally non-refundable, as funds are committed to patient
          care immediately. Where a donation was made in error, was duplicated, or the amount was
          entered incorrectly, write to info@iamd.in within 7 days with the transaction reference and
          we will process a refund.
        </p>

        <h2>How refunds are processed</h2>
        <p>
          Refunds are made to the original payment method within 7–10 working days of approval. If an
          80G receipt has already been issued for a refunded donation, that receipt is cancelled and
          must not be used for tax exemption.
        </p>

        <h2>Contact</h2>
        <p>
          Cancellations and refund requests: info@iamd.in · 01792 292037 · +91 92180 98999.
        </p>
      </LegalBody>
    </>
  );
}
