import { notFound } from "next/navigation";
import PortfolioPreview from "@/components/portfolio-preview";

export default async function Page() {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

  const res = await fetch(`${apiBase}/portfolio/${username}`, {
    cache: "no-store",
  });
  if (!res.ok) notFound();

  const { data } = await res.json();
  return <PortfolioPreview data={data} />;
}
