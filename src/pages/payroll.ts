import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  return redirect("https://payroll-2024.vercel.app", 307);
};
