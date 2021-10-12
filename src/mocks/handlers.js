import { rest } from 'msw';

export const handlers = [
  rest.get("http://ipwhois.app/json/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ip: "90.90.43.12",
        country_code:"FR",
        city: "Triel-sur-Seine",
        latitude: 48.9817076,
        longitude: 2.0054541,
        timezone_gmt: "GMT +1:00",
        isp: "Orange S.A.",
      })
    );
  }),
];
