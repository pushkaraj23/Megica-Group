"use client";

import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { motion } from "framer-motion";
import { registerWorldMap } from "./registerWorldMap";

/* =========================
   EXPORT DATA – BATHROOM FITTINGS
========================= */

const exportData = {
  India: {
    coord: [78.9629, 20.5937],
    stats: "Manufacturing & Engineering Hub",
  },
  Bhutan: {
    coord: [90.4336, 27.5142],
    stats: "Regional Trade Partner",
  },
  Europe: {
    coord: [10.0, 50.0],
    stats: "Compliance-Driven Fittings Market",
  },
  Africa: {
    coord: [20.0, 5.0],
    stats: "Infrastructure & Project Demand",
  },
  "South America": {
    coord: [-60.0, -15.0],
    stats: "Emerging Distribution Markets",
  },
  Australia: {
    coord: [133.7751, -25.2744],
    stats: "Retail & Project Supply",
  },
};

/* =========================
   ECHARTS OPTIONS
========================= */

const getOption = () => ({
  backgroundColor: "transparent",

  tooltip: {
    trigger: "item",
    backgroundColor: "#000",
    borderColor: "#fca235",
    borderWidth: 1,
    textStyle: { color: "#fff", fontSize: 12 },
    formatter: (params) =>
      exportData[params.name]
        ? `<b>${params.name}</b><br/>${exportData[params.name].stats}`
        : params.name,
  },

  geo: {
    map: "world",
    roam: false,
    zoom: 1.15,
    itemStyle: {
      areaColor: "#111",
      borderColor: "#333",
    },
    emphasis: {
      itemStyle: {
        areaColor: "#1a1a1a",
      },
    },
  },

  series: [
    /* ===== FLOW LINES ===== */
    {
      type: "lines",
      coordinateSystem: "geo",
      effect: {
        show: true,
        period: 6,
        trailLength: 0.4,
        color: "#fca235",
        symbolSize: 3,
      },
      lineStyle: {
        color: "#fca235",
        width: 1.5,
        opacity: 0.6,
        curveness: 0.3,
      },
      data: Object.keys(exportData)
        .filter((c) => c !== "India")
        .map((c) => ({
          fromName: "India",
          toName: c,
          coords: [exportData.India.coord, exportData[c].coord],
        })),
    },

    /* ===== RIPPLE POINTS ===== */
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      rippleEffect: { scale: 4 },
      itemStyle: {
        color: "#fca235",
        shadowBlur: 10,
        shadowColor: "#fca235",
      },
      data: Object.keys(exportData).map((name) => ({
        name,
        value: [...exportData[name].coord, 1],
      })),
    },
  ],
});

/* =========================
   COMPONENT
========================= */

export default function GlobalExportMap() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerWorldMap().then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <section className="bg-bg-section py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== HEADER ===== */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest uppercase text-brand-muted">
              Global Export Network
            </p>

            <h2 className="mt-4 text-3xl lg:text-4xl font-heading text-text-primary">
              Indian Engineering
              <br />
              <span className="text-brand-accent">Supplied Worldwide</span>
            </h2>

            <p className="mt-6 text-text-muted leading-relaxed">
              From India to key global markets across multiple continents,
              Megica delivers export-ready bathroom fittings through structured,
              reliable B2B supply chains.
            </p>
          </motion.div>

          {/* ===== KPI CARDS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
          >
            <StatCard title="Export Regions" value="6" desc="Active markets" />
            <StatCard
              title="Manufacturing Base"
              value="India"
              desc="Engineering hub"
            />
            <StatCard
              title="Supply Model"
              value="B2B"
              desc="Bulk & project exports"
            />
            <StatCard
              title="Export Ready"
              value="100%"
              desc="Global compliance"
            />
          </motion.div>
        </div>

        {/* ===== MAP ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-bg-dark shadow-card overflow-hidden"
        >
          <ReactECharts option={getOption()} style={{ height: 520 }} />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   STAT CARD
========================= */

function StatCard({ title, value, desc }) {
  return (
    <div className="rounded-2xl bg-bg-light border border-border-light p-6 shadow-soft">
      <p className="text-xs uppercase tracking-wide text-brand-muted">
        {title}
      </p>
      <p className="mt-2 text-3xl font-heading text-text-primary">{value}</p>
      <p className="mt-1 text-sm text-text-muted">{desc}</p>
    </div>
  );
}
