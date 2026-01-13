import * as echarts from "echarts/core";

let registered = false;

export async function registerWorldMap() {
  if (registered) return;

  const res = await fetch("/maps/world.geo.json");
  const geoJson = await res.json();

  echarts.registerMap("world", geoJson);
  registered = true;
}
