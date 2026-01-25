import * as echarts from "echarts";

export async function registerWorldMap() {
  if (echarts.getMap("world")) return;

  const res = await fetch("/maps/world.geo.json");

  const worldJson = await res.json();
  echarts.registerMap("world", worldJson);
}
