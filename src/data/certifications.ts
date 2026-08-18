export type CertificationStatus =
  | "completed"
  | "in-progress"
  | "goal";

export interface Certification {
  name: string;
  issuer?: string;
  status: CertificationStatus;
  description?: string;
  year?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    status: "completed",
  },
  {
    name: "Scrum Fundamentals Certified (SFC™)",
    status: "completed",
  },
  {
    name: "ACE Multicloud Network Associate",
    status: "completed",
  },
  {
    name: "Kubernetes Certification Path",
    status: "in-progress",
    description:
      "Currently deepening my Kubernetes expertise and progressing through the CNCF Kubernetes certification path.",
  },
  {
    name: "Kubestronaut",
    status: "goal",
    description:
      "Long-term goal: become a Kubestronaut by completing the required Kubernetes certification journey.",
  },
];
