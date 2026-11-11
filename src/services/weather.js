// Open-Meteo Free API (খুলনা কো-অর্ডিনেট: ২২.৮৪৫৬° উত্তর, ৮৯.৫৪০৩° পূর্ব)
export async function fetchKhulnaWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.8456&longitude=89.5403&current_weather=true&hourly=precipitation_probability"
    );
    const data = await res.json();
    return {
      temp: Math.round(data.current_weather.temperature),
      wind: data.current_weather.windspeed,
      rainChance: data.hourly?.precipitation_probability?.[0] || 0,
      condition: data.current_weather.weathercode <= 3 ? "Clear" : "Rainy"
    };
  } catch {
    return { temp: 26, wind: 9, rainChance: 5, condition: "Clear" };
  }
}