import { fetchFilteredToilets } from "@/app/lib/data";
import { ToiletDB } from "@/app/lib/definitions";
import DataTable from "./table-large-screen";
import { Box } from "@mui/material";
import React from "react";
import Cards from "./table-small-screen";

export default async function ToiletTable({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) {
  const entries: ToiletDB[] = await fetchFilteredToilets(query);

  return (
    <main>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block', height: "100%" } }}>
        <DataTable rows={entries} />
      </Box>
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' } }}>
        <Cards entries={entries} />
      </Box>
    </main>
  );
}
