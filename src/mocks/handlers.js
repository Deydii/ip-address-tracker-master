import { rest } from 'msw';

export const handlers = [

  // Get current IP address
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

  // Get IP infos
   rest.get("http://ipwhois.app/json/107.20.175.192", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ip: "107.20.175.192",
        country_code:"US",
        city: "Ashburn",
        latitude: 39.0437567,
        longitude: -77.4874416,
        timezone_gmt: "GMT -5:00",
        isp: "Amazon.com, Inc.",
      })
    );
  }),

  // Get domain infos
  rest.get("http://ipwhois.app/json/reactjs.org", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ip: "76.76.21.21",
        country_code:"US",
        city: "Walnut Creek",
        latitude: 37.9100783,
        longitude: -122.0651819,
        timezone_gmt: "GMT -8:00",
        isp: "Amazon.com, Inc.",
      })
    );
  }),
];
