"use client";

import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { motion } from "framer-motion";
import { registerWorldMap } from "../lib/registerWorldMap";

/* =========================
   TRADE DATA (UNCHANGED)
========================= */
const tradeData = {
  India: {
    coord: [78.9629, 20.5937],
    stats: "Manufacturing Hub • Export Origin",
  },
  Nigeria: {
    coord: [8.6753, 9.082],
    stats: "High Import Demand • Distribution Market",
  },
  Sudan: {
    coord: [30.2176, 12.8628],
    stats: "Growing Infrastructure Projects",
  },
  Germany: {
    coord: [10.4515, 51.1657],
    stats: "Premium Compliance Market",
  },
  Australia: {
    coord: [133.7751, -25.2744],
    stats: "Retail & Project Supply",
  },
};

/* =========================
   ECHARTS OPTIONS (UNCHANGED)
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
      tradeData[params.name]
        ? `<b>${params.name}</b><br/>${tradeData[params.name].stats}`
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
      data: Object.keys(tradeData)
        .filter((c) => c !== "India")
        .map((c) => ({
          fromName: "India",
          toName: c,
          coords: [tradeData.India.coord, tradeData[c].coord],
        })),
    },
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      rippleEffect: { scale: 4 },
      itemStyle: {
        color: "#fca235",
        shadowBlur: 10,
        shadowColor: "#fca235",
      },
      data: Object.keys(tradeData).map((name) => ({
        name,
        value: [...tradeData[name].coord, 1],
      })),
    },
  ],
});

export default function GlobalDemandMap() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    registerWorldMap().then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <section className="bg-bg-section py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* LEFT CONTEXT */} 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <p className="text-sm tracking-widest uppercase text-brand-muted">
              Global Trade Network
            </p>

            <h2 className="mt-4 font-heading text-3xl lg:text-4xl text-text-primary">
              Exporting Indian Manufacturing
              <br />
              <span className="text-brand-accent">To the World</span>
            </h2>

            <p className="mt-6 text-text-muted leading-relaxed">
              Megica Group supplies sanitaryware and bathroom fittings
              manufactured in India to strategically important global markets.
              Our export operations are built on reliability, compliance, and
              long-term sourcing partnerships.
            </p>

            <div className="mt-8 space-y-3 text-sm text-text-muted">
              <p>• Indian manufacturing excellence</p>
              <p>• Structured export operations</p>
              <p>• Trusted by global distributors</p>
            </div>
          </motion.div>

          {/* KPI CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
          >
            <StatCard
              title="Export Markets"
              value="5+"
              desc="Active countries served"
            />
            <StatCard
              title="Product Categories"
              value="2"
              desc="Sanitaryware & fittings"
            />
            <StatCard
              title="Export Ready"
              value="100%"
              desc="Packaging & documentation"
            />
            <StatCard
              title="Supply Model"
              value="B2B"
              desc="Bulk & repeat orders"
            />
          </motion.div>
        </div>

        {/* ================= MAP ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-bg-dark shadow-card overflow-hidden"
        >
          <ReactECharts option={getOption()} style={{ height: "500px" }} />
        </motion.div>

        {/* ================= LEGEND + CTA ================= */}
        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {Object.keys(tradeData).map((c) => (
              <span
                key={c}
                className="rounded-full border border-border-light bg-bg-light px-4 py-2 text-sm text-text-secondary"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="/contact"
              className="rounded-xl bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-deep hover:opacity-90 transition"
            >
              Request Export Details
            </a>
            <a
              href="/products"
              className="rounded-xl border border-border-light px-6 py-3 text-sm font-semibold text-text-secondary hover:bg-bg-light transition"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   SUB COMPONENT
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
