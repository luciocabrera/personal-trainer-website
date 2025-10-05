import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import { ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Outlet, Meta, Links, ScrollRestoration, Scripts, useLocation } from "react-router";
import { c } from "react/compiler-runtime";
import * as stylex from "@stylexjs/stylex";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import { useEffect } from "react";
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    const {
      pipe,
      abort
    } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }), {
      onShellReady() {
        const body = new PassThrough();
        const stream = createReadableStreamFromReadable(body);
        responseHeaders.set("Content-Type", "text/html");
        resolve(new Response(stream, {
          headers: responseHeaders,
          status: responseStatusCode
        }));
        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      }
    });
    setTimeout(abort, 1e4);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const styles$a = {
  html: {
    scrollBehavior: "xkcv6ua",
    scrollPaddingTop: "x5ho148",
    overflowX: "x6ikm8r",
    "@media (max-width: 768px)_scrollPaddingTop": "x17pl9r4",
    $$css: true
  },
  body: {
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    padding: "x1717udv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    overflowX: "x6ikm8r",
    fontFamily: "xmy0v6l",
    background: "x1cxgd31",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1525slw",
    minHeight: "xg6iff7",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    $$css: true
  }
};
function Layout(t0) {
  const $ = c(8);
  const {
    children
  } = t0;
  let t1;
  let t2;
  let t3;
  let t4;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = stylex.props(styles$a.html);
    t2 = /* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("meta", {
        name: "theme-color",
        content: "#4ecdc4"
      }), /* @__PURE__ */ jsx("meta", {
        name: "description",
        content: "Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training."
      }), /* @__PURE__ */ jsx("meta", {
        name: "robots",
        content: "index,follow"
      }), /* @__PURE__ */ jsx("meta", {
        property: "og:type",
        content: "website"
      }), /* @__PURE__ */ jsx("meta", {
        property: "og:title",
        content: "Level Up Training - Outdoor Personal Training in The Hague"
      }), /* @__PURE__ */ jsx("meta", {
        property: "og:description",
        content: "Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training."
      }), /* @__PURE__ */ jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /* @__PURE__ */ jsx("link", {
        rel: "canonical",
        href: "https://leveluptraining.nl"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg+xml"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/favicon.svg",
        sizes: "any"
      }), /* @__PURE__ */ jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicon.svg"
      }), /* @__PURE__ */ jsx("link", {
        rel: "dns-prefetch",
        href: "//fonts.googleapis.com"
      }), /* @__PURE__ */ jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /* @__PURE__ */ jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      }), /* @__PURE__ */ jsx("link", {
        rel: "preload",
        href: "/images/strength-training.jpg",
        as: "image",
        fetchPriority: "high"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("style", {
        children: "\n          .skip-link { \n            position: absolute; \n            top: -40px; \n            left: 6px; \n            background: #4ecdc4; \n            color: white; \n            padding: 8px; \n            text-decoration: none; \n            border-radius: 0 0 8px 8px;\n            z-index: 1000;\n          }\n          .skip-link:focus { \n            top: 0; \n          }\n        "
      })]
    });
    t3 = stylex.props(styles$a.body);
    t4 = /* @__PURE__ */ jsx("a", {
      href: "#main-content",
      className: "skip-link",
      children: "Skip to main content"
    });
    $[0] = t1;
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
  } else {
    t1 = $[0];
    t2 = $[1];
    t3 = $[2];
    t4 = $[3];
  }
  let t5;
  let t6;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(ScrollRestoration, {});
    t6 = /* @__PURE__ */ jsx(Scripts, {});
    $[4] = t5;
    $[5] = t6;
  } else {
    t5 = $[4];
    t6 = $[5];
  }
  let t7;
  if ($[6] !== children) {
    t7 = /* @__PURE__ */ jsxs("html", {
      lang: "en",
      ...t1,
      children: [t2, /* @__PURE__ */ jsxs("body", {
        ...t3,
        children: [t4, children, t5, t6]
      })]
    });
    $[6] = children;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
}
const root = UNSAFE_withComponentProps(function App() {
  const $ = c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(Outlet, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2(t0) {
  const $ = c(11);
  const {
    error
  } = t0;
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || "An unexpected error occurred.";
  } else {
    if (error instanceof Error) {
      details = error.message;
      stack = error.stack;
    }
  }
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      padding: "2rem",
      textAlign: "center"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== message) {
    t2 = /* @__PURE__ */ jsx("h1", {
      children: message
    });
    $[1] = message;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== details) {
    t3 = /* @__PURE__ */ jsx("p", {
      children: details
    });
    $[3] = details;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== stack) {
    t4 = stack && /* @__PURE__ */ jsx("pre", {
      style: {
        padding: "2rem",
        background: "hsla(10, 50%, 50%, 0.1)",
        color: "red",
        overflow: "auto",
        maxWidth: "100%"
      },
      children: stack
    });
    $[5] = stack;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t2 || $[8] !== t3 || $[9] !== t4) {
    t5 = /* @__PURE__ */ jsxs("main", {
      style: t1,
      children: [t2, t3, t4]
    });
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const nav$2 = { "home": "Home", "trainings": "Trainings", "schedule": "Schedule", "pricing": "Pricing", "contact": "Contact" };
const hero$2 = { "title": "OUTDOOR TRAININGS", "subtitle": "LEVEL UP", "tagline": "STRENGTH - CONDITION - FLEXIBILITY", "description": "Do you want to work in small groups on better condition and more strength and flexibility? You are welcome at Level Up! In all weather conditions you work outside on your sports goals." };
const trainings$2 = { "title": "Which training suits you?", "level1": { "title": "Level 1 Strength, Condition & Flexibility", "desc": "A combination of HIIT, strength training and exercises for mobility and flexibility. Duration: 60 minutes", "imageAlt": "Strength and conditioning training" }, "level2": { "title": "Level 2 Strength & Run", "desc": "A training where running and strength training are combined and there is also attention to mobility. Duration: 70 minutes", "imageAlt": "Running and strength training" }, "level3": { "title": "Level 3 Parent+Child training", "desc": "Together with your child (+/- 4-10 years) work on strength and condition with the main goal of fun and cooperation. Duration: 60 minutes", "imageAlt": "Parent and child fitness training" } };
const schedule$2 = { "title": "The Schedule", "locationsTitle": "Training Locations", "comingSoon": "*COMING SOON*", "locations": { "peacePalace": { "title": "Peace Palace (Vredespaleis)", "time": "Monday evening 20:00", "type": "Level 2: Strength & Run", "capacity": "Maximum 10 participants", "location": "Location (autumn/winter): At the Peace Palace" }, "scheveningse": { "title": "Scheveningse Bosjes", "time": "Friday morning 8:00", "type": "Level 1: Strength, condition", "capacity": "Maximum 10 participants", "location": "Location (autumn/winter): Scheveningse Bosjes (TBA)" }, "indischMonument": { "title": "Indisch Monument", "time": "Sunday morning 9:00", "type": "Level 3: parent+child training", "capacity": "Child participates free (1x per 3 weeks)", "location": "Location: At the Indisch Monument", "dates": "Dates 2025: 26/10, 9/11, 30/11 and 21/12" }, "verademing": { "title": "De Verademing", "time": "Wednesday morning 9:00", "type": "Level 1: Strength, condition", "capacity": "Maximum 10 participants", "location": "Location (autumn/winter): De Verademing" } } };
const pricing$2 = { "title": "How do you join?", "strip10": { "title": "Strip card 10", "desc": "Sign up and use a strip card for 10 lessons (all levels). Price: €135" }, "strip20": { "title": "Strip card 20", "desc": "Sign up and use a strip card for 20 lessons (all levels). Price: €240" }, "single": { "title": "Single lesson", "desc": "A single lesson costs €15" }, "unlimited": { "title": "Unlimited training", "desc": "Do you want to train unlimited for a fixed amount per month? Indicate this on the registration form. Try a lesson once? Nice! You can sign up for a free trial week. €72 /month" } };
const signup$2 = { "title": "Sign up? Questions?", "signupNow": "Sign up now", "nice": "Nice that you want to sign up! You can do this via the form below", "questions": "Questions?", "email": "info@leveluptraining.nl", "instagram": "@leveluptraining", "follow": "Follow Level Up", "contactUs": "Contact us:" };
const form$2 = { "name": "Name", "email": "Email", "message": "Message", "submit": "Submit" };
const footer$2 = { "copyright": "© 2025 Level Up Training" };
const en = {
  nav: nav$2,
  hero: hero$2,
  trainings: trainings$2,
  schedule: schedule$2,
  pricing: pricing$2,
  signup: signup$2,
  form: form$2,
  footer: footer$2
};
const nav$1 = { "home": "Home", "trainings": "Trainingen", "schedule": "Rooster", "pricing": "Prijzen", "contact": "Contact" };
const hero$1 = { "title": "OUTDOOR TRAININGEN", "subtitle": "LEVEL UP", "tagline": "KRACHT - CONDITIE - FLEXIBILITEIT", "description": "Wil je in kleine groepen werken aan een betere conditie en aan meer kracht en flexibiliteit? Je bent welkom bij Level Up! In alle weersomstandigheden werk je buiten aan jouw sportdoelen." };
const trainings$1 = { "title": "Welke training past bij jou?", "level1": { "title": "Level 1 Kracht, Conditie & Flexibiliteit", "desc": "Een combinatie van HIIT, krachttraining en oefeningen voor mobiliteit en flexibiliteit. Duur: 60 minuten", "imageAlt": "Kracht- en conditietraining" }, "level2": { "title": "Level 2 Kracht & Run", "desc": "Een training waarbij loop- en krachttraining worden gecombineerd en er ook aandacht is voor mobiliteit. Duur: 70 minuten", "imageAlt": "Hardlopen en krachttraining" }, "level3": { "title": "Level 3 Ouder+Kind training", "desc": "Samen met je kind (+/- 4-10 jaar) werken aan kracht en conditie met als belangrijkste doel plezier en samenwerking. Duur: 60 minuten", "imageAlt": "Ouder en kind fitnesstraining" } };
const schedule$1 = { "title": "Het Rooster", "locationsTitle": "Trainingslocaties", "comingSoon": "*BINNENKORT*", "locations": { "peacePalace": { "title": "Vredespaleis (Peace Palace)", "time": "Maandagavond 20:00", "type": "Level 2: Kracht & Run", "capacity": "Maximaal 10 deelnemers", "location": "Locatie (herfst/winter): Bij het Vredespaleis" }, "scheveningse": { "title": "Scheveningse Bosjes", "time": "Vrijdagochtend 8:00", "type": "Level 1: Kracht, conditie", "capacity": "Maximaal 10 deelnemers", "location": "Locatie (herfst/winter): Scheveningse Bosjes (TBA)" }, "indischMonument": { "title": "Indisch Monument", "time": "Zondagochtend 9:00", "type": "Level 3: ouder+kind training", "capacity": "Kind neemt gratis deel (1x per 3 weken)", "location": "Locatie: Bij het Indisch Monument", "dates": "Data 2025: 26/10, 9/11, 30/11 en 21/12" }, "verademing": { "title": "De Verademing", "time": "Woensdagochtend 9:00", "type": "Level 1: Kracht, conditie", "capacity": "Maximaal 10 deelnemers", "location": "Locatie (herfst/winter): De Verademing" } } };
const pricing$1 = { "title": "Hoe doe je mee?", "strip10": { "title": "Strippenkaart 10", "desc": "Meld je aan en gebruik een strippenkaart voor 10 lessen (alle levels). Prijs: €135" }, "strip20": { "title": "Strippenkaart 20", "desc": "Meld je aan en gebruik een strippenkaart voor 20 lessen (alle levels). Prijs: €240" }, "single": { "title": "Losse les", "desc": "Een losse les kost €15,-" }, "unlimited": { "title": "Onbeperkt trainen", "desc": "Wil je onbeperkt kunnen trainen voor een vast bedrag per maand? Geef dit aan op het aanmeldformulier. Een keer een les proberen? Leuk! Je kan je aanmelden voor een gratis proefweek. €72,- /maand" } };
const signup$1 = { "title": "Aanmelden? Vragen?", "signupNow": "Meld je nu aan", "nice": "Leuk dat je je wil aanmelden! Dat kan via onderstaand formulier", "questions": "Vragen?", "email": "info@leveluptraining.nl", "instagram": "@leveluptraining", "follow": "Volg Level Up", "contactUs": "Neem contact op:" };
const form$1 = { "name": "Naam", "email": "E-mail", "message": "Bericht", "submit": "Verzenden" };
const footer$1 = { "copyright": "© 2025 Level Up Training" };
const nl = {
  nav: nav$1,
  hero: hero$1,
  trainings: trainings$1,
  schedule: schedule$1,
  pricing: pricing$1,
  signup: signup$1,
  form: form$1,
  footer: footer$1
};
const nav = { "home": "Inicio", "trainings": "Entrenamientos", "schedule": "Horario", "pricing": "Precios", "contact": "Contacto" };
const hero = { "title": "ENTRENAMIENTOS AL AIRE LIBRE", "subtitle": "LEVEL UP", "tagline": "FUERZA - CONDICIÓN - FLEXIBILIDAD", "description": "¿Quieres trabajar en grupos pequeños en una mejor condición y más fuerza y flexibilidad? ¡Eres bienvenido en Level Up! En todas las condiciones climáticas trabajas al aire libre en tus objetivos deportivos." };
const trainings = { "title": "¿Cuál entrenamiento te conviene?", "level1": { "title": "Nivel 1 Fuerza, Condición y Flexibilidad", "desc": "Una combinación de HIIT, entrenamiento de fuerza y ejercicios para movilidad y flexibilidad. Duración: 60 minutos", "imageAlt": "Entrenamiento de fuerza y acondicionamiento" }, "level2": { "title": "Nivel 2 Fuerza y Carrera", "desc": "Un entrenamiento donde se combinan carrera y entrenamiento de fuerza y también hay atención a la movilidad. Duración: 70 minutos", "imageAlt": "Carrera y entrenamiento de fuerza" }, "level3": { "title": "Nivel 3 Entrenamiento Padre+Hijo", "desc": "Juntos con tu hijo (+/- 4-10 años) trabajar en fuerza y condición con el objetivo principal de diversión y cooperación. Duración: 60 minutos", "imageAlt": "Entrenamiento de fitness padre e hijo" } };
const schedule = { "title": "El Horario", "locationsTitle": "Ubicaciones de Entrenamiento", "comingSoon": "*PRÓXIMAMENTE*", "locations": { "peacePalace": { "title": "Palacio de la Paz (Vredespaleis)", "time": "Lunes por la noche 20:00", "type": "Nivel 2: Fuerza y Carrera", "capacity": "Máximo 10 participantes", "location": "Ubicación (otoño/invierno): En el Palacio de la Paz" }, "scheveningse": { "title": "Scheveningse Bosjes", "time": "Viernes por la mañana 8:00", "type": "Nivel 1: Fuerza, condición", "capacity": "Máximo 10 participantes", "location": "Ubicación (otoño/invierno): Scheveningse Bosjes (TBA)" }, "indischMonument": { "title": "Monumento Indisch", "time": "Domingo por la mañana 9:00", "type": "Nivel 3: entrenamiento padre+hijo", "capacity": "El niño participa gratis (1x por 3 semanas)", "location": "Ubicación: En el Monumento Indisch", "dates": "Fechas 2025: 26/10, 9/11, 30/11 y 21/12" }, "verademing": { "title": "De Verademing", "time": "Miércoles por la mañana 9:00", "type": "Nivel 1: Fuerza, condición", "capacity": "Máximo 10 participantes", "location": "Ubicación (otoño/invierno): De Verademing" } } };
const pricing = { "title": "¿Cómo te unes?", "strip10": { "title": "Tarjeta de tiras 10", "desc": "Regístrate y usa una tarjeta de tiras para 10 lecciones (todos los niveles). Precio: €135" }, "strip20": { "title": "Tarjeta de tiras 20", "desc": "Regístrate y usa una tarjeta de tiras para 20 lecciones (todos los niveles). Precio: €240" }, "single": { "title": "Lección individual", "desc": "Una lección individual cuesta €15" }, "unlimited": { "title": "Entrenamiento ilimitado", "desc": "¿Quieres entrenar ilimitadamente por una cantidad fija al mes? Indícalo en el formulario de registro. ¿Probar una lección una vez? ¡Genial! Puedes registrarte para una semana de prueba gratuita. €72 /mes" } };
const signup = { "title": "¿Registrarse? ¿Preguntas?", "signupNow": "Regístrate ahora", "nice": "¡Genial que quieras registrarte! Puedes hacerlo a través del formulario a continuación", "questions": "¿Preguntas?", "email": "info@leveluptraining.nl", "instagram": "@leveluptraining", "follow": "Sigue Level Up", "contactUs": "Contáctanos:" };
const form = { "name": "Nombre", "email": "Correo electrónico", "message": "Mensaje", "submit": "Enviar" };
const footer = { "copyright": "© 2025 Level Up Training" };
const es = {
  nav,
  hero,
  trainings,
  schedule,
  pricing,
  signup,
  form,
  footer
};
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    nl: {
      translation: nl
    },
    es: {
      translation: es
    }
  },
  lng: "en",
  // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
const styles$9 = {
  header: {
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1awj2ng",
    padding: "x1ybamxr",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    position: "xixxii4",
    width: "xh8yej3",
    top: "x13vifvy",
    left: "xu96u03",
    insetInlineStart: null,
    insetInlineEnd: null,
    zIndex: "x11uqc5h",
    boxSizing: "x9f619",
    boxShadow: "x1j3haui",
    $$css: true
  },
  nav: {
    display: "x78zum5",
    justifyContent: "x1qughib",
    alignItems: "x6s0dn4",
    maxWidth: "x1ikqzku",
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    padding: "xq3cggq",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    width: "xh8yej3",
    boxSizing: "x9f619",
    $$css: true
  },
  logo: {
    fontSize: "xngnso2",
    fontWeight: "x117nqv4",
    $$css: true
  },
  languageSelector: {
    display: "x78zum5",
    gap: "x13z6uf9",
    rowGap: null,
    columnGap: null,
    $$css: true
  },
  languageButton: {
    background: "x11g6tue",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    border: "x1w184yy",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    color: "x1awj2ng",
    padding: "x164snpw",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    cursor: "x1ypdohk",
    borderRadius: "x18zih8k",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    transition: "xdr7xzh",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":hover_backgroundColor": "x1vm225t",
    $$css: true
  },
  menuList: {
    listStyle: "xe8uvvx",
    listStyleImage: null,
    listStylePosition: null,
    listStyleType: null,
    display: "x78zum5",
    gap: "x8fetqu",
    rowGap: null,
    columnGap: null,
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    padding: "x1717udv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: true
  },
  menuLink: {
    color: "x1awj2ng",
    textDecoration: "x1hl2dhg",
    textDecorationColor: null,
    textDecorationLine: null,
    textDecorationStyle: null,
    textDecorationThickness: null,
    padding: "x7gbtqy",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "x18zih8k",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    transition: "xdr7xzh",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":hover_backgroundColor": "x1vm225t",
    $$css: true
  },
  navMobile: {
    "@media (max-width: 768px)_flexDirection": "x1mx85iw",
    "@media (max-width: 768px)_gap": "x1x97ot6",
    "@media (max-width: 768px)_rowGap": null,
    "@media (max-width: 768px)_columnGap": null,
    $$css: true
  },
  menuListMobile: {
    "@media (max-width: 768px)_flexDirection": "x1mx85iw",
    "@media (max-width: 768px)_gap": "x188u2ca",
    "@media (max-width: 768px)_rowGap": null,
    "@media (max-width: 768px)_columnGap": null,
    $$css: true
  }
};
const HeaderSection = () => {
  const $ = c(42);
  const {
    t
  } = useTranslation();
  const changeLanguage = _temp$2;
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles$9.header);
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  let t3;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = stylex.props(styles$9.nav, styles$9.navMobile);
    t2 = /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles$9.logo),
      children: "Level Up"
    });
    t3 = stylex.props(styles$9.languageSelector);
    $[1] = t1;
    $[2] = t2;
    $[3] = t3;
  } else {
    t1 = $[1];
    t2 = $[2];
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = () => changeLanguage("en");
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx("button", {
      onClick: t4,
      "aria-label": "Switch to English",
      type: "button",
      ...stylex.props(styles$9.languageButton),
      children: "EN"
    });
    t6 = () => changeLanguage("nl");
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  let t8;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx("button", {
      onClick: t6,
      "aria-label": "Switch to Dutch",
      type: "button",
      ...stylex.props(styles$9.languageButton),
      children: "NL"
    });
    t8 = () => changeLanguage("es");
    $[7] = t7;
    $[8] = t8;
  } else {
    t7 = $[7];
    t8 = $[8];
  }
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxs("div", {
      ...t3,
      role: "group",
      "aria-label": "Language selection",
      children: [t5, t7, /* @__PURE__ */ jsx("button", {
        onClick: t8,
        "aria-label": "Switch to Spanish",
        type: "button",
        ...stylex.props(styles$9.languageButton),
        children: "ES"
      })]
    });
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  let t10;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = stylex.props(styles$9.menuList, styles$9.menuListMobile);
    $[10] = t10;
  } else {
    t10 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = stylex.props(styles$9.menuLink);
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  let t12;
  if ($[12] !== t) {
    t12 = t("nav.home");
    $[12] = t;
    $[13] = t12;
  } else {
    t12 = $[13];
  }
  let t13;
  if ($[14] !== t12) {
    t13 = /* @__PURE__ */ jsx("li", {
      role: "none",
      children: /* @__PURE__ */ jsx("a", {
        href: "#hero",
        role: "menuitem",
        ...t11,
        children: t12
      })
    });
    $[14] = t12;
    $[15] = t13;
  } else {
    t13 = $[15];
  }
  let t14;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = stylex.props(styles$9.menuLink);
    $[16] = t14;
  } else {
    t14 = $[16];
  }
  let t15;
  if ($[17] !== t) {
    t15 = t("nav.trainings");
    $[17] = t;
    $[18] = t15;
  } else {
    t15 = $[18];
  }
  let t16;
  if ($[19] !== t15) {
    t16 = /* @__PURE__ */ jsx("li", {
      role: "none",
      children: /* @__PURE__ */ jsx("a", {
        href: "#trainings",
        role: "menuitem",
        ...t14,
        children: t15
      })
    });
    $[19] = t15;
    $[20] = t16;
  } else {
    t16 = $[20];
  }
  let t17;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = stylex.props(styles$9.menuLink);
    $[21] = t17;
  } else {
    t17 = $[21];
  }
  let t18;
  if ($[22] !== t) {
    t18 = t("nav.schedule");
    $[22] = t;
    $[23] = t18;
  } else {
    t18 = $[23];
  }
  let t19;
  if ($[24] !== t18) {
    t19 = /* @__PURE__ */ jsx("li", {
      role: "none",
      children: /* @__PURE__ */ jsx("a", {
        href: "#schedule",
        role: "menuitem",
        ...t17,
        children: t18
      })
    });
    $[24] = t18;
    $[25] = t19;
  } else {
    t19 = $[25];
  }
  let t20;
  if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = stylex.props(styles$9.menuLink);
    $[26] = t20;
  } else {
    t20 = $[26];
  }
  let t21;
  if ($[27] !== t) {
    t21 = t("nav.pricing");
    $[27] = t;
    $[28] = t21;
  } else {
    t21 = $[28];
  }
  let t22;
  if ($[29] !== t21) {
    t22 = /* @__PURE__ */ jsx("li", {
      role: "none",
      children: /* @__PURE__ */ jsx("a", {
        href: "#pricing",
        role: "menuitem",
        ...t20,
        children: t21
      })
    });
    $[29] = t21;
    $[30] = t22;
  } else {
    t22 = $[30];
  }
  let t23;
  if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = stylex.props(styles$9.menuLink);
    $[31] = t23;
  } else {
    t23 = $[31];
  }
  let t24;
  if ($[32] !== t) {
    t24 = t("nav.contact");
    $[32] = t;
    $[33] = t24;
  } else {
    t24 = $[33];
  }
  let t25;
  if ($[34] !== t24) {
    t25 = /* @__PURE__ */ jsx("li", {
      role: "none",
      children: /* @__PURE__ */ jsx("a", {
        href: "#signup",
        role: "menuitem",
        ...t23,
        children: t24
      })
    });
    $[34] = t24;
    $[35] = t25;
  } else {
    t25 = $[35];
  }
  let t26;
  if ($[36] !== t13 || $[37] !== t16 || $[38] !== t19 || $[39] !== t22 || $[40] !== t25) {
    t26 = /* @__PURE__ */ jsx("header", {
      ...t0,
      children: /* @__PURE__ */ jsxs("nav", {
        role: "navigation",
        "aria-label": "Main navigation",
        ...t1,
        children: [t2, t9, /* @__PURE__ */ jsxs("ul", {
          role: "menubar",
          ...t10,
          children: [t13, t16, t19, t22, t25]
        })]
      })
    });
    $[36] = t13;
    $[37] = t16;
    $[38] = t19;
    $[39] = t22;
    $[40] = t25;
    $[41] = t26;
  } else {
    t26 = $[41];
  }
  return t26;
};
function _temp$2(lng) {
  i18n.changeLanguage(lng);
}
const SignupIcon = (t0) => {
  const $ = c(19);
  const {
    width: t1,
    height: t2,
    className
  } = t0;
  const width = t1 === void 0 ? 220 : t1;
  const height = t2 === void 0 ? 200 : t2;
  let t10;
  let t11;
  let t12;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "100", r: "90", fill: "url(#signupGradient1)", opacity: "0.1" });
    t4 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "100", r: "70", fill: "url(#signupGradient2)", opacity: "0.15" });
    t5 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "100", r: "50", fill: "url(#signupGradient3)", opacity: "0.2" });
    t6 = /* @__PURE__ */ jsx("path", { d: "M70 80L110 110L150 80V140H70V80Z", fill: "url(#signupGradient4)" });
    t7 = /* @__PURE__ */ jsx("path", { d: "M70 80L110 110L150 80", stroke: "url(#signupGradient4)", strokeWidth: "3", fill: "none" });
    t8 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "60", r: "15", fill: "url(#signupGradient4)" });
    t9 = /* @__PURE__ */ jsx("path", { d: "M95 45C95 37 102 30 110 30C118 30 125 37 125 45", stroke: "url(#signupGradient4)", strokeWidth: "3", fill: "none" });
    t10 = /* @__PURE__ */ jsx("path", { d: "M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56Z", fill: "url(#signupGradient5)", opacity: "0.6" });
    t11 = /* @__PURE__ */ jsx("path", { d: "M170 40L172 46L178 46L173 50L175 56L170 52L165 56L167 50L162 46L168 46Z", fill: "url(#signupGradient5)", opacity: "0.6" });
    t12 = /* @__PURE__ */ jsx("path", { d: "M180 120L182 126L188 126L183 130L185 136L180 132L175 136L177 130L172 126L178 126Z", fill: "url(#signupGradient5)", opacity: "0.6" });
    $[0] = t10;
    $[1] = t11;
    $[2] = t12;
    $[3] = t3;
    $[4] = t4;
    $[5] = t5;
    $[6] = t6;
    $[7] = t7;
    $[8] = t8;
    $[9] = t9;
  } else {
    t10 = $[0];
    t11 = $[1];
    t12 = $[2];
    t3 = $[3];
    t4 = $[4];
    t5 = $[5];
    t6 = $[6];
    t7 = $[7];
    t8 = $[8];
    t9 = $[9];
  }
  let t13;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsxs("linearGradient", { id: "signupGradient1", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
    ] });
    $[10] = t13;
  } else {
    t13 = $[10];
  }
  let t14;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxs("linearGradient", { id: "signupGradient2", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9500" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
    ] });
    $[11] = t14;
  } else {
    t14 = $[11];
  }
  let t15;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsxs("linearGradient", { id: "signupGradient3", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
    ] });
    $[12] = t15;
  } else {
    t15 = $[12];
  }
  let t16;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsxs("linearGradient", { id: "signupGradient4", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
    ] });
    $[13] = t16;
  } else {
    t16 = $[13];
  }
  let t17;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ jsxs("defs", { children: [
      t13,
      t14,
      t15,
      t16,
      /* @__PURE__ */ jsxs("linearGradient", { id: "signupGradient5", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FFD700" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
      ] })
    ] });
    $[14] = t17;
  } else {
    t17 = $[14];
  }
  let t18;
  if ($[15] !== className || $[16] !== height || $[17] !== width) {
    t18 = /* @__PURE__ */ jsxs("svg", { width, height, viewBox: "0 0 220 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
      t3,
      t4,
      t5,
      t6,
      t7,
      t8,
      t9,
      t10,
      t11,
      t12,
      t17
    ] });
    $[15] = className;
    $[16] = height;
    $[17] = width;
    $[18] = t18;
  } else {
    t18 = $[18];
  }
  return t18;
};
const PricingIcon = (t0) => {
  const $ = c(32);
  const {
    width: t1,
    height: t2,
    className
  } = t0;
  const width = t1 === void 0 ? 220 : t1;
  const height = t2 === void 0 ? 200 : t2;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t16;
  let t17;
  let t18;
  let t19;
  let t20;
  let t21;
  let t22;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "100", r: "90", fill: "url(#pricingGradient1)", opacity: "0.1" });
    t4 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "100", r: "70", fill: "url(#pricingGradient2)", opacity: "0.15" });
    t5 = /* @__PURE__ */ jsx("circle", { cx: "110", cy: "100", r: "50", fill: "url(#pricingGradient3)", opacity: "0.2" });
    t6 = /* @__PURE__ */ jsx("rect", { x: "70", y: "60", width: "80", height: "50", rx: "8", fill: "url(#pricingGradient4)", stroke: "url(#pricingGradient5)", strokeWidth: "2" });
    t7 = /* @__PURE__ */ jsx("rect", { x: "75", y: "65", width: "70", height: "8", rx: "4", fill: "rgba(255,255,255,0.8)" });
    t8 = /* @__PURE__ */ jsx("rect", { x: "75", y: "78", width: "45", height: "6", rx: "3", fill: "rgba(255,255,255,0.6)" });
    t9 = /* @__PURE__ */ jsx("rect", { x: "75", y: "88", width: "35", height: "6", rx: "3", fill: "rgba(255,255,255,0.6)" });
    t10 = /* @__PURE__ */ jsx("circle", { cx: "135", cy: "85", r: "8", fill: "rgba(255,255,255,0.8)" });
    t11 = /* @__PURE__ */ jsx("rect", { x: "40", y: "130", width: "30", height: "8", rx: "4", fill: "url(#pricingGradient6)" });
    t12 = /* @__PURE__ */ jsx("circle", { cx: "35", cy: "134", r: "6", fill: "url(#pricingGradient6)" });
    t13 = /* @__PURE__ */ jsx("circle", { cx: "75", cy: "134", r: "6", fill: "url(#pricingGradient6)" });
    t14 = /* @__PURE__ */ jsx("rect", { x: "150", y: "130", width: "30", height: "8", rx: "4", fill: "url(#pricingGradient6)" });
    t15 = /* @__PURE__ */ jsx("circle", { cx: "145", cy: "134", r: "6", fill: "url(#pricingGradient6)" });
    t16 = /* @__PURE__ */ jsx("circle", { cx: "185", cy: "134", r: "6", fill: "url(#pricingGradient6)" });
    t17 = /* @__PURE__ */ jsx("path", { d: "M95 40C95 35 100 30 110 30C120 30 125 35 125 40V45H95V40Z", fill: "url(#pricingGradient7)" });
    t18 = /* @__PURE__ */ jsx("rect", { x: "100", y: "45", width: "20", height: "15", rx: "2", fill: "url(#pricingGradient7)" });
    t19 = /* @__PURE__ */ jsx("rect", { x: "105", y: "60", width: "10", height: "8", fill: "url(#pricingGradient7)" });
    t20 = /* @__PURE__ */ jsx("rect", { x: "102", y: "68", width: "16", height: "4", rx: "2", fill: "url(#pricingGradient7)" });
    t21 = /* @__PURE__ */ jsx("path", { d: "M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56L50 50Z", fill: "url(#pricingGradient8)", opacity: "0.8" });
    t22 = /* @__PURE__ */ jsx("path", { d: "M170 50L172 56L178 56L173 60L175 66L170 62L165 66L167 60L162 56L168 56L170 50Z", fill: "url(#pricingGradient8)", opacity: "0.8" });
    $[0] = t10;
    $[1] = t11;
    $[2] = t12;
    $[3] = t13;
    $[4] = t14;
    $[5] = t15;
    $[6] = t16;
    $[7] = t17;
    $[8] = t18;
    $[9] = t19;
    $[10] = t20;
    $[11] = t21;
    $[12] = t22;
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
    $[16] = t6;
    $[17] = t7;
    $[18] = t8;
    $[19] = t9;
  } else {
    t10 = $[0];
    t11 = $[1];
    t12 = $[2];
    t13 = $[3];
    t14 = $[4];
    t15 = $[5];
    t16 = $[6];
    t17 = $[7];
    t18 = $[8];
    t19 = $[9];
    t20 = $[10];
    t21 = $[11];
    t22 = $[12];
    t3 = $[13];
    t4 = $[14];
    t5 = $[15];
    t6 = $[16];
    t7 = $[17];
    t8 = $[18];
    t9 = $[19];
  }
  let t23;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient1", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
    ] });
    $[20] = t23;
  } else {
    t23 = $[20];
  }
  let t24;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t24 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient2", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9500" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
    ] });
    $[21] = t24;
  } else {
    t24 = $[21];
  }
  let t25;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t25 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient3", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
    ] });
    $[22] = t25;
  } else {
    t25 = $[22];
  }
  let t26;
  if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
    t26 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient4", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
      /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#FF9500" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
    ] });
    $[23] = t26;
  } else {
    t26 = $[23];
  }
  let t27;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t27 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient5", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
    ] });
    $[24] = t27;
  } else {
    t27 = $[24];
  }
  let t28;
  if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient6", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9500" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
    ] });
    $[25] = t28;
  } else {
    t28 = $[25];
  }
  let t29;
  if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient7", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FFD700" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
    ] });
    $[26] = t29;
  } else {
    t29 = $[26];
  }
  let t30;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t30 = /* @__PURE__ */ jsxs("defs", { children: [
      t23,
      t24,
      t25,
      t26,
      t27,
      t28,
      t29,
      /* @__PURE__ */ jsxs("linearGradient", { id: "pricingGradient8", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
      ] })
    ] });
    $[27] = t30;
  } else {
    t30 = $[27];
  }
  let t31;
  if ($[28] !== className || $[29] !== height || $[30] !== width) {
    t31 = /* @__PURE__ */ jsxs("svg", { width, height, viewBox: "0 0 220 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
      t3,
      t4,
      t5,
      t6,
      t7,
      t8,
      t9,
      t10,
      t11,
      t12,
      t13,
      t14,
      t15,
      t16,
      t17,
      t18,
      t19,
      t20,
      t21,
      t22,
      t30
    ] });
    $[28] = className;
    $[29] = height;
    $[30] = width;
    $[31] = t31;
  } else {
    t31 = $[31];
  }
  return t31;
};
const EmailIcon = (t0) => {
  const $ = c(5);
  const {
    width: t1,
    height: t2,
    className
  } = t0;
  const width = t1 === void 0 ? 24 : t1;
  const height = t2 === void 0 ? 24 : t2;
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 8l-8 5-8-5V6l8 5 8-5v2z" });
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  let t4;
  if ($[1] !== className || $[2] !== height || $[3] !== width) {
    t4 = /* @__PURE__ */ jsx("svg", { width, height, viewBox: "0 0 24 24", fill: "currentColor", className, children: t3 });
    $[1] = className;
    $[2] = height;
    $[3] = width;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
};
const InstagramIcon = (t0) => {
  const $ = c(5);
  const {
    width: t1,
    height: t2,
    className
  } = t0;
  const width = t1 === void 0 ? 24 : t1;
  const height = t2 === void 0 ? 24 : t2;
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" });
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  let t4;
  if ($[1] !== className || $[2] !== height || $[3] !== width) {
    t4 = /* @__PURE__ */ jsx("svg", { width, height, viewBox: "0 0 24 24", fill: "currentColor", className, children: t3 });
    $[1] = className;
    $[2] = height;
    $[3] = width;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
};
const styles$8 = {
  footer: {
    background: "x1hjnl9c",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1awj2ng",
    textAlign: "x2b8uid",
    padding: "xis3749",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    boxShadow: "x1w5dwk1",
    $$css: true
  },
  footerContent: {
    maxWidth: "x1ikqzku",
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: true
  },
  footerContacts: {
    display: "x78zum5",
    justifyContent: "xl56j7k",
    gap: "x1h4iudz",
    rowGap: null,
    columnGap: null,
    marginBottom: "xyi6m4r",
    flexWrap: "x1a02dak",
    $$css: true
  },
  footerLink: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x13z6uf9",
    rowGap: null,
    columnGap: null,
    color: "x1awj2ng",
    textDecoration: "x1hl2dhg",
    textDecorationColor: null,
    textDecorationLine: null,
    textDecorationStyle: null,
    textDecorationThickness: null,
    padding: "xrqs5gp",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "x1m3ak92",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    background: "xy2abrt",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    transition: "x10gahu4",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    fontSize: "x1nrrp6k",
    ":hover_background": "xw7hazv",
    ":hover_backgroundAttachment": null,
    ":hover_backgroundClip": null,
    ":hover_backgroundColor": null,
    ":hover_backgroundImage": null,
    ":hover_backgroundOrigin": null,
    ":hover_backgroundPosition": null,
    ":hover_backgroundPositionX": null,
    ":hover_backgroundPositionY": null,
    ":hover_backgroundRepeat": null,
    ":hover_backgroundSize": null,
    ":hover_transform": "x1lz31oe",
    ":hover_willChange": "x4cr57q",
    $$css: true
  },
  footerContactsMobile: {
    "@media (max-width: 768px)_flexDirection": "x1mx85iw",
    "@media (max-width: 768px)_gap": "x188u2ca",
    "@media (max-width: 768px)_rowGap": null,
    "@media (max-width: 768px)_columnGap": null,
    "@media (max-width: 768px)_alignItems": "xmpd8g6",
    $$css: true
  },
  footerLinkMobile: {
    "@media (max-width: 768px)_fontSize": "x4smhet",
    "@media (max-width: 768px)_padding": "xgoyc52",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    $$css: true
  }
};
const FooterSection = () => {
  const $ = c(9);
  const {
    t
  } = useTranslation();
  let t0;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles$8.footer);
    t1 = stylex.props(styles$8.footerContent);
    t2 = stylex.props(styles$8.footerContacts, styles$8.footerContactsMobile);
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
  } else {
    t0 = $[0];
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxs("a", {
      href: "mailto:info@leveluptraining.nl",
      ...stylex.props(styles$8.footerLink, styles$8.footerLinkMobile),
      children: [/* @__PURE__ */ jsx(EmailIcon, {
        width: 18,
        height: 18
      }), "info@leveluptraining.nl"]
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxs("div", {
      ...t2,
      children: [t3, /* @__PURE__ */ jsxs("a", {
        href: "https://instagram.com/leveluptraining",
        target: "_blank",
        rel: "noopener noreferrer",
        ...stylex.props(styles$8.footerLink, styles$8.footerLinkMobile),
        children: [/* @__PURE__ */ jsx(InstagramIcon, {
          width: 18,
          height: 18
        }), "@leveluptraining"]
      })]
    });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== t) {
    t5 = t("footer.copyright");
    $[5] = t;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== t5) {
    t6 = /* @__PURE__ */ jsx("footer", {
      ...t0,
      children: /* @__PURE__ */ jsxs("div", {
        ...t1,
        children: [t4, /* @__PURE__ */ jsx("p", {
          children: t5
        })]
      })
    });
    $[7] = t5;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  return t6;
};
const SEOHead = (t0) => {
  const $ = c(8);
  const {
    title,
    description,
    keywords,
    ogImage: t1,
    url: t2,
    locale
  } = t0;
  const ogImage = t1 === void 0 ? "https://leveluptraining.nl/og-image.jpg" : t1;
  const url = t2 === void 0 ? "https://leveluptraining.nl/" : t2;
  const {
    i18n: i18n2
  } = useTranslation();
  const currentLocale = locale || i18n2.language;
  let t3;
  let t4;
  if ($[0] !== currentLocale || $[1] !== description || $[2] !== keywords || $[3] !== ogImage || $[4] !== title || $[5] !== url) {
    t3 = () => {
      if (title) {
        document.title = title;
      }
      const updateMetaTag = _temp$1;
      if (description) {
        updateMetaTag("description", description);
        updateMetaTag("og:description", description);
        updateMetaTag("twitter:description", description);
      }
      if (keywords) {
        updateMetaTag("keywords", keywords);
      }
      if (title) {
        updateMetaTag("og:title", title);
        updateMetaTag("twitter:title", title);
      }
      updateMetaTag("og:url", url);
      updateMetaTag("twitter:url", url);
      updateMetaTag("og:image", ogImage);
      updateMetaTag("twitter:image", ogImage);
      document.documentElement.lang = currentLocale;
      updateMetaTag("language", currentLocale);
      updateMetaTag("og:locale", getOGLocale(currentLocale));
    };
    t4 = [title, description, keywords, ogImage, url, currentLocale];
    $[0] = currentLocale;
    $[1] = description;
    $[2] = keywords;
    $[3] = ogImage;
    $[4] = title;
    $[5] = url;
    $[6] = t3;
    $[7] = t4;
  } else {
    t3 = $[6];
    t4 = $[7];
  }
  useEffect(t3, t4);
  return null;
};
const getOGLocale = (locale) => {
  const localeMap = {
    en: "en_US",
    nl: "nl_NL",
    es: "es_ES"
  };
  return localeMap[locale] || "en_US";
};
function _temp$1(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) {
      meta.setAttribute("property", name);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
const styles$7 = {
  app: {
    maxWidth: "x1ikqzku",
    width: "xh8yej3",
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    backgroundColor: "x12peec7",
    boxShadow: "xfbm4y6",
    position: "x1n2onr6",
    flex: "x98rzlu",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    $$css: true
  },
  main: {
    padding: "xr6jg0x",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    marginTop: "x1pdq3kb",
    flex: "x98rzlu",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    justifyContent: "xl56j7k",
    "@media (max-width: 768px)_padding": "x1kyy2cf",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    "@media (max-width: 768px)_marginTop": "x1082xb5",
    $$css: true
  }
};
const MainLayout = () => {
  const $ = c(4);
  let t0;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(SEOHead, {
      title: "Level Up Training - Outdoor Personal Training in The Hague",
      description: "Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training. Try a free trial week!",
      keywords: "personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
    });
    t1 = stylex.props(styles$7.app);
    t2 = /* @__PURE__ */ jsx(HeaderSection, {});
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
  } else {
    t0 = $[0];
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxs(Fragment, {
      children: [t0, /* @__PURE__ */ jsxs("div", {
        ...t1,
        children: [t2, /* @__PURE__ */ jsx("main", {
          id: "main-content",
          role: "main",
          ...stylex.props(styles$7.main),
          children: /* @__PURE__ */ jsx(Outlet, {})
        }), /* @__PURE__ */ jsx(FooterSection, {})]
      })]
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};
const main = UNSAFE_withComponentProps(MainLayout);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: main
}, Symbol.toStringTag, { value: "Module" }));
const styles$6 = {
  hero: {
    textAlign: "x2b8uid",
    background: "x161ro8j",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1awj2ng",
    padding: "x5g1jw2",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    marginBottom: "x1t84w78",
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x1h4iudz",
    rowGap: null,
    columnGap: null,
    boxShadow: "xadec8d",
    $$css: true
  },
  heroContent: {
    flex: "x98rzlu",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    $$css: true
  },
  heroImage: {
    flex: "x98rzlu",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    $$css: true
  },
  heroImageImg: {
    width: "xh8yej3",
    height: "x1vd4hg5",
    objectFit: "xl1xv1r",
    borderRadius: "x1q4ynmn",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxShadow: "x141103z",
    $$css: true
  },
  heroTitle: {
    fontSize: "x13wtedm",
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: true
  },
  heroSubtitle: {
    fontSize: "x579bpy",
    margin: "x1oqdnn1",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: true
  },
  heroParagraph: {
    fontSize: "xvewgow",
    margin: "xbkgn1r",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: true
  },
  heroMobile: {
    "@media (max-width: 768px)_flexDirection": "x1mx85iw",
    "@media (max-width: 768px)_textAlign": "xsx4d6k",
    $$css: true
  },
  heroTitleMobile: {
    "@media (max-width: 768px)_fontSize": "x142ge5f",
    $$css: true
  },
  heroSubtitleMobile: {
    "@media (max-width: 768px)_fontSize": "x118u78a",
    $$css: true
  },
  heroImageImgMobile: {
    "@media (max-width: 768px)_height": "x1opssvn",
    $$css: true
  }
};
const HeroSection = () => {
  const $ = c(31);
  const {
    t
  } = useTranslation();
  let t0;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles$6.hero, styles$6.heroMobile);
    t1 = stylex.props(styles$6.heroContent);
    t2 = stylex.props(styles$6.heroTitle, styles$6.heroTitleMobile);
    $[0] = t0;
    $[1] = t1;
    $[2] = t2;
  } else {
    t0 = $[0];
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t) {
    t3 = t("hero.title");
    $[3] = t;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t3) {
    t4 = /* @__PURE__ */ jsx("h1", {
      ...t2,
      children: t3
    });
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = stylex.props(styles$6.heroSubtitle, styles$6.heroSubtitleMobile);
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t) {
    t6 = t("hero.subtitle");
    $[8] = t;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t6) {
    t7 = /* @__PURE__ */ jsx("h2", {
      ...t5,
      children: t6
    });
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = stylex.props(styles$6.heroParagraph);
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== t) {
    t9 = t("hero.tagline");
    $[13] = t;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  let t10;
  if ($[15] !== t9) {
    t10 = /* @__PURE__ */ jsx("p", {
      ...t8,
      children: t9
    });
    $[15] = t9;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = stylex.props(styles$6.heroParagraph);
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== t) {
    t12 = t("hero.description");
    $[18] = t;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  let t13;
  if ($[20] !== t12) {
    t13 = /* @__PURE__ */ jsx("p", {
      ...t11,
      children: t12
    });
    $[20] = t12;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  let t14;
  if ($[22] !== t10 || $[23] !== t13 || $[24] !== t4 || $[25] !== t7) {
    t14 = /* @__PURE__ */ jsxs("div", {
      ...t1,
      children: [t4, t7, t10, t13]
    });
    $[22] = t10;
    $[23] = t13;
    $[24] = t4;
    $[25] = t7;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  let t15;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = stylex.props(styles$6.heroImage);
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsx("div", {
      ...t15,
      children: /* @__PURE__ */ jsx("img", {
        src: "/images/strength-training.jpg",
        alt: "Professional strength training session outdoors",
        fetchPriority: "high",
        decoding: "sync",
        width: "800",
        height: "600",
        ...stylex.props(styles$6.heroImageImg, styles$6.heroImageImgMobile)
      })
    });
    $[28] = t16;
  } else {
    t16 = $[28];
  }
  let t17;
  if ($[29] !== t14) {
    t17 = /* @__PURE__ */ jsxs("section", {
      id: "hero",
      ...t0,
      children: [t14, t16]
    });
    $[29] = t14;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  return t17;
};
const styles$5 = {
  training: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    gap: "xou54vl",
    rowGap: null,
    columnGap: null,
    background: "xpi0f2j",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    padding: "xis3749",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    marginBottom: "xyi6m4r",
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxShadow: "xjofqcz",
    border: "x5kumrk",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    transition: "xzask5x",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":hover_transform": "x1neyzuf",
    ":hover_boxShadow": "xiz6cr3",
    $$css: true
  },
  trainingImage: {
    width: "xh8yej3",
    height: "x1m3v4wt",
    borderRadius: "xur7f20",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    background: "xpagoa7",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    marginBottom: "xyi6m4r",
    $$css: true
  },
  trainingImageImg: {
    width: "xh8yej3",
    height: "x1m3v4wt",
    objectFit: "xl1xv1r",
    borderRadius: "xur7f20",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x1lliihq",
    backgroundColor: "x15yo4kd",
    $$css: true
  },
  trainingTitle: {
    marginTop: "xdj266r",
    marginBottom: "xhbfen4",
    background: "x161ro8j",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    fontWeight: "x117nqv4",
    fontSize: "xml2kzp",
    lineHeight: "xwn7fz2",
    $$css: true
  },
  trainingDescription: {
    fontSize: "x1jchvi3",
    color: "x33gn0b",
    lineHeight: "x1dbl2gt",
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    flexGrow: "x1iyjqo2",
    $$css: true
  },
  trainingMobile: {
    "@media (max-width: 768px)_padding": "x16k8iat",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    "@media (max-width: 768px)_gap": "x1s6havx",
    "@media (max-width: 768px)_rowGap": null,
    "@media (max-width: 768px)_columnGap": null,
    $$css: true
  },
  trainingImageMobile: {
    "@media (max-width: 768px)_height": "x1lczj8k",
    $$css: true
  },
  trainingImageImgMobile: {
    "@media (max-width: 768px)_height": "x1lczj8k",
    $$css: true
  },
  trainingTitleMobile: {
    "@media (max-width: 768px)_fontSize": "xdxl6yd",
    $$css: true
  },
  trainingDescriptionMobile: {
    "@media (max-width: 768px)_fontSize": "x1aqa0vf",
    $$css: true
  },
  trainingSmallMobile: {
    "@media (max-width: 480px)_padding": "x1oavtaa",
    "@media (max-width: 480px)_paddingInline": null,
    "@media (max-width: 480px)_paddingStart": null,
    "@media (max-width: 480px)_paddingLeft": null,
    "@media (max-width: 480px)_paddingEnd": null,
    "@media (max-width: 480px)_paddingRight": null,
    "@media (max-width: 480px)_paddingBlock": null,
    "@media (max-width: 480px)_paddingTop": null,
    "@media (max-width: 480px)_paddingBottom": null,
    "@media (max-width: 480px)_gap": "x1mpr9e1",
    "@media (max-width: 480px)_rowGap": null,
    "@media (max-width: 480px)_columnGap": null,
    $$css: true
  },
  trainingImageSmallMobile: {
    "@media (max-width: 480px)_height": "x1xiw6pw",
    $$css: true
  },
  trainingImageImgSmallMobile: {
    "@media (max-width: 480px)_height": "x1xiw6pw",
    $$css: true
  },
  trainingTitleSmallMobile: {
    "@media (max-width: 480px)_fontSize": "x1ry4c8r",
    $$css: true
  },
  trainingDescriptionSmallMobile: {
    "@media (max-width: 480px)_fontSize": "xe92fbv",
    $$css: true
  }
};
const TrainingCard = (t0) => {
  const $ = c(16);
  const {
    title,
    description,
    imageSrc,
    imageAlt
  } = t0;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = stylex.props(styles$5.training, styles$5.trainingMobile, styles$5.trainingSmallMobile);
    t2 = stylex.props(styles$5.trainingImage, styles$5.trainingImageMobile, styles$5.trainingImageSmallMobile);
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = stylex.props(styles$5.trainingImageImg, styles$5.trainingImageImgMobile, styles$5.trainingImageImgSmallMobile);
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== imageAlt || $[4] !== imageSrc) {
    t4 = /* @__PURE__ */ jsx("div", {
      ...t2,
      children: /* @__PURE__ */ jsx("img", {
        src: imageSrc,
        alt: imageAlt,
        loading: "lazy",
        decoding: "async",
        width: "800",
        height: "600",
        ...t3,
        onLoad: _temp,
        onError: _temp2
      })
    });
    $[3] = imageAlt;
    $[4] = imageSrc;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = stylex.props(styles$5.trainingTitle, styles$5.trainingTitleMobile, styles$5.trainingTitleSmallMobile);
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== title) {
    t6 = /* @__PURE__ */ jsx("h3", {
      ...t5,
      children: title
    });
    $[7] = title;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = stylex.props(styles$5.trainingDescription, styles$5.trainingDescriptionMobile, styles$5.trainingDescriptionSmallMobile);
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  let t8;
  if ($[10] !== description) {
    t8 = /* @__PURE__ */ jsx("p", {
      ...t7,
      children: description
    });
    $[10] = description;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== t4 || $[13] !== t6 || $[14] !== t8) {
    t9 = /* @__PURE__ */ jsxs("div", {
      ...t1,
      children: [t4, t6, t8]
    });
    $[12] = t4;
    $[13] = t6;
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  return t9;
};
function _temp() {
}
function _temp2() {
}
const styles$4 = {
  trainings: {
    marginBottom: "x1t84w78",
    padding: "xr6jg0x",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    background: "x1jdwrgt",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "x1m3ak92",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backdropFilter: "xgv0goc",
    boxShadow: "xehi7zf",
    border: "x1cbigqt",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: true
  },
  trainingsTitle: {
    textAlign: "x2b8uid",
    marginBottom: "xyi6m4r",
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    fontSize: "x66fkqt",
    fontWeight: "x117nqv4",
    $$css: true
  },
  trainingsGrid: {
    display: "xrvj5dj",
    gridTemplateColumns: "x16b5111",
    gap: "x1h4iudz",
    rowGap: null,
    columnGap: null,
    $$css: true
  },
  trainingsMobile: {
    "@media (max-width: 768px)_padding": "x1kyy2cf",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    $$css: true
  },
  trainingsGridMobile: {
    "@media (max-width: 768px)_gridTemplateColumns": "x1pm2qn7",
    $$css: true
  }
};
const TrainingsSection = () => {
  const $ = c(44);
  const {
    t
  } = useTranslation();
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles$4.trainings, styles$4.trainingsMobile);
    t1 = stylex.props(styles$4.trainingsTitle);
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t) {
    t2 = t("trainings.title");
    $[2] = t;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("h2", {
      ...t1,
      children: t2
    });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = stylex.props(styles$4.trainingsGrid, styles$4.trainingsGridMobile);
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t) {
    t5 = t("trainings.level1.title");
    $[7] = t;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t) {
    t6 = t("trainings.level1.desc");
    $[9] = t;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== t) {
    t7 = t("trainings.level1.imageAlt");
    $[11] = t;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== t5 || $[14] !== t6 || $[15] !== t7) {
    t8 = /* @__PURE__ */ jsx(TrainingCard, {
      title: t5,
      description: t6,
      imageSrc: "/images/strength-training.jpg",
      imageAlt: t7
    });
    $[13] = t5;
    $[14] = t6;
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== t) {
    t9 = t("trainings.level2.title");
    $[17] = t;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== t) {
    t10 = t("trainings.level2.desc");
    $[19] = t;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] !== t) {
    t11 = t("trainings.level2.imageAlt");
    $[21] = t;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  let t12;
  if ($[23] !== t10 || $[24] !== t11 || $[25] !== t9) {
    t12 = /* @__PURE__ */ jsx(TrainingCard, {
      title: t9,
      description: t10,
      imageSrc: "/images/running-training.jpg",
      imageAlt: t11
    });
    $[23] = t10;
    $[24] = t11;
    $[25] = t9;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  let t13;
  if ($[27] !== t) {
    t13 = t("trainings.level3.title");
    $[27] = t;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  let t14;
  if ($[29] !== t) {
    t14 = t("trainings.level3.desc");
    $[29] = t;
    $[30] = t14;
  } else {
    t14 = $[30];
  }
  let t15;
  if ($[31] !== t) {
    t15 = t("trainings.level3.imageAlt");
    $[31] = t;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  let t16;
  if ($[33] !== t13 || $[34] !== t14 || $[35] !== t15) {
    t16 = /* @__PURE__ */ jsx(TrainingCard, {
      title: t13,
      description: t14,
      imageSrc: "/images/parent-child-training.jpg",
      imageAlt: t15
    });
    $[33] = t13;
    $[34] = t14;
    $[35] = t15;
    $[36] = t16;
  } else {
    t16 = $[36];
  }
  let t17;
  if ($[37] !== t12 || $[38] !== t16 || $[39] !== t8) {
    t17 = /* @__PURE__ */ jsxs("div", {
      ...t4,
      children: [t8, t12, t16]
    });
    $[37] = t12;
    $[38] = t16;
    $[39] = t8;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  let t18;
  if ($[41] !== t17 || $[42] !== t3) {
    t18 = /* @__PURE__ */ jsxs("section", {
      id: "trainings",
      ...t0,
      children: [t3, t17]
    });
    $[41] = t17;
    $[42] = t3;
    $[43] = t18;
  } else {
    t18 = $[43];
  }
  return t18;
};
const styles$3 = {
  locationCard: {
    background: "x4nvebb",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    padding: "xis3749",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxShadow: "x1hnpfjf",
    border: "x5kumrk",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    transition: "xzask5x",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    minHeight: "x1bifzbx",
    ":hover_transform": "x1neyzuf",
    ":hover_boxShadow": "xkgkze4",
    ":hover_zIndex": "x13ok0bc",
    ":hover_willChange": "x4cr57q",
    $$css: true
  },
  locationCardTitle: {
    background: "x161ro8j",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    margin: "x7z5kkh",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    fontSize: "xvewgow",
    fontWeight: "x117nqv4",
    $$css: true
  },
  locationDetails: {
    margin: "xbkgn1r",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    flexGrow: "x1iyjqo2",
    $$css: true
  },
  locationDetailsDiv: {
    margin: "x1oqdnn1",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    fontSize: "x1nrrp6k",
    lineHeight: "x37zpob",
    $$css: true
  },
  trainingTime: {
    color: "x1j1y09f",
    fontWeight: "x117nqv4",
    fontSize: "x1jchvi3",
    $$css: true
  },
  trainingType: {
    color: "x25p7bg",
    fontWeight: "x1s688f",
    fontSize: "xyr29y3",
    $$css: true
  },
  trainingCapacity: {
    color: "x10lmxoj",
    fontWeight: "xk50ysn",
    $$css: true
  },
  trainingLocation: {
    color: "x33gn0b",
    fontStyle: "x1k4tb9n",
    $$css: true
  },
  trainingDates: {
    color: "xhnfc2d",
    fontWeight: "xk50ysn",
    fontSize: "x1qzg9v8",
    background: "x3c9rch",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    padding: "xc5g0ph",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "x4pepcl",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x1rg5ohu",
    marginTop: "x1ud6nd6",
    $$css: true
  },
  comingSoon: {
    color: "x1bu1wda",
    fontWeight: "x117nqv4",
    background: "x1c19dyk",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    padding: "xki3578",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x1rg5ohu",
    fontSize: "xgommxb",
    textTransform: "xtvhhri",
    letterSpacing: "xbac8wx",
    $$css: true
  },
  mapContainer: {
    borderRadius: "xur7f20",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    boxShadow: "x1vnbo0c",
    marginTop: "xj1urod",
    $$css: true
  },
  mapIframe: {
    border: "x1wty727",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "xur7f20",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: true
  },
  locationDetailsDivMobile: {
    "@media (max-width: 768px)_fontSize": "xadq6cx",
    $$css: true
  },
  trainingTimeMobile: {
    "@media (max-width: 768px)_fontSize": "x1aqa0vf",
    $$css: true
  },
  trainingTypeMobile: {
    "@media (max-width: 768px)_fontSize": "xadq6cx",
    $$css: true
  },
  trainingDatesMobile: {
    "@media (max-width: 768px)_fontSize": "x4smhet",
    $$css: true
  },
  comingSoonMobile: {
    "@media (max-width: 768px)_fontSize": "xab58v4",
    $$css: true
  }
};
const LocationCard = (t0) => {
  const $ = c(39);
  const {
    title,
    time,
    type,
    capacity,
    location,
    mapSrc,
    dates,
    isComingSoon: t1,
    comingSoonText: t2
  } = t0;
  const isComingSoon = t1 === void 0 ? false : t1;
  const comingSoonText = t2 === void 0 ? "*COMING SOON*" : t2;
  let t3;
  let t4;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = stylex.props(styles$3.locationCard);
    t4 = stylex.props(styles$3.locationCardTitle);
    $[0] = t3;
    $[1] = t4;
  } else {
    t3 = $[0];
    t4 = $[1];
  }
  let t5;
  if ($[2] !== title) {
    t5 = /* @__PURE__ */ jsx("h4", {
      ...t4,
      children: title
    });
    $[2] = title;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  let t6;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = stylex.props(styles$3.locationDetails);
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  let t7;
  if ($[5] !== comingSoonText || $[6] !== isComingSoon) {
    t7 = isComingSoon && /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles$3.locationDetailsDiv, styles$3.locationDetailsDivMobile, styles$3.trainingTime, styles$3.trainingTimeMobile, styles$3.comingSoon, styles$3.comingSoonMobile),
      children: comingSoonText
    });
    $[5] = comingSoonText;
    $[6] = isComingSoon;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = stylex.props(styles$3.locationDetailsDiv, styles$3.locationDetailsDivMobile, styles$3.trainingTime, styles$3.trainingTimeMobile);
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t9;
  if ($[9] !== time) {
    t9 = /* @__PURE__ */ jsx("div", {
      ...t8,
      children: time
    });
    $[9] = time;
    $[10] = t9;
  } else {
    t9 = $[10];
  }
  let t10;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = stylex.props(styles$3.locationDetailsDiv, styles$3.locationDetailsDivMobile, styles$3.trainingType, styles$3.trainingTypeMobile);
    $[11] = t10;
  } else {
    t10 = $[11];
  }
  let t11;
  if ($[12] !== type) {
    t11 = /* @__PURE__ */ jsx("div", {
      ...t10,
      children: type
    });
    $[12] = type;
    $[13] = t11;
  } else {
    t11 = $[13];
  }
  let t12;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = stylex.props(styles$3.locationDetailsDiv, styles$3.locationDetailsDivMobile, styles$3.trainingCapacity);
    $[14] = t12;
  } else {
    t12 = $[14];
  }
  let t13;
  if ($[15] !== capacity) {
    t13 = /* @__PURE__ */ jsx("div", {
      ...t12,
      children: capacity
    });
    $[15] = capacity;
    $[16] = t13;
  } else {
    t13 = $[16];
  }
  let t14;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = stylex.props(styles$3.locationDetailsDiv, styles$3.locationDetailsDivMobile, styles$3.trainingLocation);
    $[17] = t14;
  } else {
    t14 = $[17];
  }
  let t15;
  if ($[18] !== location) {
    t15 = /* @__PURE__ */ jsx("div", {
      ...t14,
      children: location
    });
    $[18] = location;
    $[19] = t15;
  } else {
    t15 = $[19];
  }
  let t16;
  if ($[20] !== dates) {
    t16 = dates && /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles$3.trainingDates, styles$3.trainingDatesMobile),
      children: dates
    });
    $[20] = dates;
    $[21] = t16;
  } else {
    t16 = $[21];
  }
  let t17;
  if ($[22] !== t11 || $[23] !== t13 || $[24] !== t15 || $[25] !== t16 || $[26] !== t7 || $[27] !== t9) {
    t17 = /* @__PURE__ */ jsxs("div", {
      ...t6,
      children: [t7, t9, t11, t13, t15, t16]
    });
    $[22] = t11;
    $[23] = t13;
    $[24] = t15;
    $[25] = t16;
    $[26] = t7;
    $[27] = t9;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  let t18;
  if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = stylex.props(styles$3.mapContainer);
    $[29] = t18;
  } else {
    t18 = $[29];
  }
  const t19 = `Interactive map showing location of ${title} training sessions at ${location}`;
  const t20 = `Map for ${title} location`;
  let t21;
  if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = stylex.props(styles$3.mapIframe);
    $[30] = t21;
  } else {
    t21 = $[30];
  }
  let t22;
  if ($[31] !== mapSrc || $[32] !== t19 || $[33] !== t20) {
    t22 = /* @__PURE__ */ jsx("div", {
      ...t18,
      children: /* @__PURE__ */ jsx("iframe", {
        src: mapSrc,
        width: "100%",
        height: "200",
        title: t19,
        "aria-label": t20,
        ...t21,
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        tabIndex: 0
      })
    });
    $[31] = mapSrc;
    $[32] = t19;
    $[33] = t20;
    $[34] = t22;
  } else {
    t22 = $[34];
  }
  let t23;
  if ($[35] !== t17 || $[36] !== t22 || $[37] !== t5) {
    t23 = /* @__PURE__ */ jsxs("div", {
      ...t3,
      children: [t5, t17, t22]
    });
    $[35] = t17;
    $[36] = t22;
    $[37] = t5;
    $[38] = t23;
  } else {
    t23 = $[38];
  }
  return t23;
};
const styles$2 = {
  schedule: {
    marginBottom: "x1t84w78",
    padding: "xr6jg0x",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    background: "x1jdwrgt",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "x1m3ak92",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backdropFilter: "xgv0goc",
    boxShadow: "xehi7zf",
    border: "x1cbigqt",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: true
  },
  scheduleTitle: {
    textAlign: "x2b8uid",
    marginBottom: "xyi6m4r",
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    fontSize: "x66fkqt",
    fontWeight: "x117nqv4",
    $$css: true
  },
  locationsSection: {
    margin: "x41wgo0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: true
  },
  locationsSectionTitle: {
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    textAlign: "x2b8uid",
    marginBottom: "x1nhhxel",
    fontSize: "x579bpy",
    fontWeight: "x117nqv4",
    $$css: true
  },
  locationsGrid: {
    display: "xrvj5dj",
    gridTemplateColumns: "x16b5111",
    gap: "xru8eyw",
    rowGap: null,
    columnGap: null,
    marginBottom: "x1t84w78",
    alignItems: "x1qjc9v5",
    overflow: "x1rea2x4",
    overflowX: null,
    overflowY: null,
    $$css: true
  },
  scheduleMobile: {
    "@media (max-width: 768px)_padding": "x1kyy2cf",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    $$css: true
  },
  locationsGridMobile: {
    "@media (max-width: 768px)_gridTemplateColumns": "x1pm2qn7",
    $$css: true
  }
};
const ScheduleSection = () => {
  const $ = c(94);
  const {
    t
  } = useTranslation();
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles$2.schedule, styles$2.scheduleMobile);
    t1 = stylex.props(styles$2.scheduleTitle);
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t) {
    t2 = t("schedule.title");
    $[2] = t;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("h2", {
      ...t1,
      children: t2
    });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  let t5;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = stylex.props(styles$2.locationsSection);
    t5 = stylex.props(styles$2.locationsSectionTitle);
    $[6] = t4;
    $[7] = t5;
  } else {
    t4 = $[6];
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t) {
    t6 = t("schedule.locationsTitle");
    $[8] = t;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t6) {
    t7 = /* @__PURE__ */ jsx("h3", {
      ...t5,
      children: t6
    });
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = stylex.props(styles$2.locationsGrid, styles$2.locationsGridMobile);
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== t) {
    t9 = t("schedule.locations.peacePalace.title");
    $[13] = t;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  let t10;
  if ($[15] !== t) {
    t10 = t("schedule.locations.peacePalace.time");
    $[15] = t;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] !== t) {
    t11 = t("schedule.locations.peacePalace.type");
    $[17] = t;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  let t12;
  if ($[19] !== t) {
    t12 = t("schedule.locations.peacePalace.capacity");
    $[19] = t;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  let t13;
  if ($[21] !== t) {
    t13 = t("schedule.locations.peacePalace.location");
    $[21] = t;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  let t14;
  if ($[23] !== t10 || $[24] !== t11 || $[25] !== t12 || $[26] !== t13 || $[27] !== t9) {
    t14 = /* @__PURE__ */ jsx(LocationCard, {
      title: t9,
      time: t10,
      type: t11,
      capacity: t12,
      location: t13,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.8934567890!2d4.287647315708086!3d52.10516097972684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6a7e1b02a59%3A0x5f1b6a7e1b02a59!2sPeace%20Palace%2C%20Carnegieplein%202%2C%202517%20KJ%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456789"
    });
    $[23] = t10;
    $[24] = t11;
    $[25] = t12;
    $[26] = t13;
    $[27] = t9;
    $[28] = t14;
  } else {
    t14 = $[28];
  }
  let t15;
  if ($[29] !== t) {
    t15 = t("schedule.locations.scheveningse.title");
    $[29] = t;
    $[30] = t15;
  } else {
    t15 = $[30];
  }
  let t16;
  if ($[31] !== t) {
    t16 = t("schedule.locations.scheveningse.time");
    $[31] = t;
    $[32] = t16;
  } else {
    t16 = $[32];
  }
  let t17;
  if ($[33] !== t) {
    t17 = t("schedule.locations.scheveningse.type");
    $[33] = t;
    $[34] = t17;
  } else {
    t17 = $[34];
  }
  let t18;
  if ($[35] !== t) {
    t18 = t("schedule.locations.scheveningse.capacity");
    $[35] = t;
    $[36] = t18;
  } else {
    t18 = $[36];
  }
  let t19;
  if ($[37] !== t) {
    t19 = t("schedule.locations.scheveningse.location");
    $[37] = t;
    $[38] = t19;
  } else {
    t19 = $[38];
  }
  let t20;
  if ($[39] !== t15 || $[40] !== t16 || $[41] !== t17 || $[42] !== t18 || $[43] !== t19) {
    t20 = /* @__PURE__ */ jsx(LocationCard, {
      title: t15,
      time: t16,
      type: t17,
      capacity: t18,
      location: t19,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.3326386195881!2d4.335391910669067!3d52.0488124708928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6f4c5d05b47%3A0xc9bfa2760dec51c3!2s2282%20JR%20Rijswijk!5e1!3m2!1sen!2snl!4v1759050133365!5m2!1sen!2snl"
    });
    $[39] = t15;
    $[40] = t16;
    $[41] = t17;
    $[42] = t18;
    $[43] = t19;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  let t21;
  if ($[45] !== t) {
    t21 = t("schedule.locations.indischMonument.title");
    $[45] = t;
    $[46] = t21;
  } else {
    t21 = $[46];
  }
  let t22;
  if ($[47] !== t) {
    t22 = t("schedule.locations.indischMonument.time");
    $[47] = t;
    $[48] = t22;
  } else {
    t22 = $[48];
  }
  let t23;
  if ($[49] !== t) {
    t23 = t("schedule.locations.indischMonument.type");
    $[49] = t;
    $[50] = t23;
  } else {
    t23 = $[50];
  }
  let t24;
  if ($[51] !== t) {
    t24 = t("schedule.locations.indischMonument.capacity");
    $[51] = t;
    $[52] = t24;
  } else {
    t24 = $[52];
  }
  let t25;
  if ($[53] !== t) {
    t25 = t("schedule.locations.indischMonument.location");
    $[53] = t;
    $[54] = t25;
  } else {
    t25 = $[54];
  }
  let t26;
  if ($[55] !== t) {
    t26 = t("schedule.locations.indischMonument.dates");
    $[55] = t;
    $[56] = t26;
  } else {
    t26 = $[56];
  }
  let t27;
  if ($[57] !== t21 || $[58] !== t22 || $[59] !== t23 || $[60] !== t24 || $[61] !== t25 || $[62] !== t26) {
    t27 = /* @__PURE__ */ jsx(LocationCard, {
      title: t21,
      time: t22,
      type: t23,
      capacity: t24,
      location: t25,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.123!2d4.301234!3d52.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b8d5e6f7a8b9%3A0x1a2b3c4d5e6f7a8b!2sIndisch%20Monument%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456791",
      dates: t26
    });
    $[57] = t21;
    $[58] = t22;
    $[59] = t23;
    $[60] = t24;
    $[61] = t25;
    $[62] = t26;
    $[63] = t27;
  } else {
    t27 = $[63];
  }
  let t28;
  if ($[64] !== t) {
    t28 = t("schedule.locations.verademing.title");
    $[64] = t;
    $[65] = t28;
  } else {
    t28 = $[65];
  }
  let t29;
  if ($[66] !== t) {
    t29 = t("schedule.locations.verademing.time");
    $[66] = t;
    $[67] = t29;
  } else {
    t29 = $[67];
  }
  let t30;
  if ($[68] !== t) {
    t30 = t("schedule.locations.verademing.type");
    $[68] = t;
    $[69] = t30;
  } else {
    t30 = $[69];
  }
  let t31;
  if ($[70] !== t) {
    t31 = t("schedule.locations.verademing.capacity");
    $[70] = t;
    $[71] = t31;
  } else {
    t31 = $[71];
  }
  let t32;
  if ($[72] !== t) {
    t32 = t("schedule.locations.verademing.location");
    $[72] = t;
    $[73] = t32;
  } else {
    t32 = $[73];
  }
  let t33;
  if ($[74] !== t) {
    t33 = t("schedule.comingSoon");
    $[74] = t;
    $[75] = t33;
  } else {
    t33 = $[75];
  }
  let t34;
  if ($[76] !== t28 || $[77] !== t29 || $[78] !== t30 || $[79] !== t31 || $[80] !== t32 || $[81] !== t33) {
    t34 = /* @__PURE__ */ jsx(LocationCard, {
      title: t28,
      time: t29,
      type: t30,
      capacity: t31,
      location: t32,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.456!2d4.283456!3d52.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b9e1f2a3b4c5%3A0x6d7e8f9a0b1c2d3e!2sDe%20Verademing%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456792",
      isComingSoon: true,
      comingSoonText: t33
    });
    $[76] = t28;
    $[77] = t29;
    $[78] = t30;
    $[79] = t31;
    $[80] = t32;
    $[81] = t33;
    $[82] = t34;
  } else {
    t34 = $[82];
  }
  let t35;
  if ($[83] !== t14 || $[84] !== t20 || $[85] !== t27 || $[86] !== t34) {
    t35 = /* @__PURE__ */ jsxs("div", {
      ...t8,
      children: [t14, t20, t27, t34]
    });
    $[83] = t14;
    $[84] = t20;
    $[85] = t27;
    $[86] = t34;
    $[87] = t35;
  } else {
    t35 = $[87];
  }
  let t36;
  if ($[88] !== t35 || $[89] !== t7) {
    t36 = /* @__PURE__ */ jsxs("div", {
      ...t4,
      children: [t7, t35]
    });
    $[88] = t35;
    $[89] = t7;
    $[90] = t36;
  } else {
    t36 = $[90];
  }
  let t37;
  if ($[91] !== t3 || $[92] !== t36) {
    t37 = /* @__PURE__ */ jsxs("section", {
      id: "schedule",
      ...t0,
      children: [t3, t36]
    });
    $[91] = t3;
    $[92] = t36;
    $[93] = t37;
  } else {
    t37 = $[93];
  }
  return t37;
};
const styles$1 = {
  pricing: {
    marginBottom: "x1t84w78",
    padding: "xr6jg0x",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    background: "x1jdwrgt",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "x1m3ak92",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backdropFilter: "xgv0goc",
    boxShadow: "xehi7zf",
    border: "x1cbigqt",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: true
  },
  pricingTitle: {
    textAlign: "x2b8uid",
    marginBottom: "xyi6m4r",
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    fontSize: "x66fkqt",
    fontWeight: "x117nqv4",
    $$css: true
  },
  pricingImage: {
    textAlign: "x2b8uid",
    marginBottom: "x1t84w78",
    $$css: true
  },
  pricingIconContainer: {
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    height: "x1vd4hg5",
    background: "x1222il9",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backdropFilter: "xgv0goc",
    border: "x1x476br",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    maxWidth: "xrlsmeg",
    $$css: true
  },
  pricingIconSvg: {
    animationName: "xbfkjmp",
    animationDuration: "x7t6ubo",
    animationTimingFunction: "x4hg4is",
    animationIterationCount: "xa4qsjk",
    willChange: "x1so62im",
    $$css: true
  },
  pricingGrid: {
    display: "xrvj5dj",
    gridTemplateColumns: "xvz2c1o",
    gap: "xru8eyw",
    rowGap: null,
    columnGap: null,
    $$css: true
  },
  price: {
    background: "xpi0f2j",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    padding: "xis3749",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    marginBottom: "xyi6m4r",
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxShadow: "xjofqcz",
    border: "x5kumrk",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    transition: "xzask5x",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ":hover_transform": "x1neyzuf",
    ":hover_boxShadow": "xiz6cr3",
    $$css: true
  },
  priceTitle: {
    marginTop: "xdj266r",
    background: "x161ro8j",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    fontWeight: "x117nqv4",
    $$css: true
  },
  pricingMobile: {
    "@media (max-width: 768px)_padding": "x1kyy2cf",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    $$css: true
  },
  pricingGridMobile: {
    "@media (max-width: 768px)_gridTemplateColumns": "x1pm2qn7",
    $$css: true
  },
  pricingIconContainerMobile: {
    "@media (max-width: 768px)_width": "x1i8vjtc",
    "@media (max-width: 768px)_maxWidth": "xcu46eb",
    "@media (max-width: 768px)_height": "xjsx6d0",
    "@media (max-width: 768px)_margin": "x1i06gni",
    "@media (max-width: 768px)_marginInline": null,
    "@media (max-width: 768px)_marginInlineStart": null,
    "@media (max-width: 768px)_marginLeft": null,
    "@media (max-width: 768px)_marginInlineEnd": null,
    "@media (max-width: 768px)_marginRight": null,
    "@media (max-width: 768px)_marginBlock": null,
    "@media (max-width: 768px)_marginTop": null,
    "@media (max-width: 768px)_marginBottom": null,
    $$css: true
  },
  pricingIconSvgMobile: {
    "@media (max-width: 768px)_width": "xiwwzun",
    "@media (max-width: 768px)_maxWidth": "x1e8r7he",
    "@media (max-width: 768px)_height": "x1rys8o5",
    $$css: true
  }
};
const PricingSection = () => {
  const $ = c(68);
  const {
    t
  } = useTranslation();
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles$1.pricing, styles$1.pricingMobile);
    t1 = stylex.props(styles$1.pricingTitle);
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t) {
    t2 = t("pricing.title");
    $[2] = t;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("h2", {
      ...t1,
      children: t2
    });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  let t5;
  let t6;
  let t7;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles$1.pricingImage),
      children: /* @__PURE__ */ jsx("div", {
        ...stylex.props(styles$1.pricingIconContainer, styles$1.pricingIconContainerMobile),
        children: /* @__PURE__ */ jsx("div", {
          ...stylex.props(styles$1.pricingIconSvg, styles$1.pricingIconSvgMobile),
          children: /* @__PURE__ */ jsx(PricingIcon, {})
        })
      })
    });
    t5 = stylex.props(styles$1.pricingGrid, styles$1.pricingGridMobile);
    t6 = stylex.props(styles$1.price);
    t7 = stylex.props(styles$1.priceTitle);
    $[6] = t4;
    $[7] = t5;
    $[8] = t6;
    $[9] = t7;
  } else {
    t4 = $[6];
    t5 = $[7];
    t6 = $[8];
    t7 = $[9];
  }
  let t8;
  if ($[10] !== t) {
    t8 = t("pricing.strip10.title");
    $[10] = t;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  let t9;
  if ($[12] !== t8) {
    t9 = /* @__PURE__ */ jsx("h3", {
      ...t7,
      children: t8
    });
    $[12] = t8;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] !== t) {
    t10 = t("pricing.strip10.desc");
    $[14] = t;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  let t11;
  if ($[16] !== t10) {
    t11 = /* @__PURE__ */ jsx("p", {
      children: t10
    });
    $[16] = t10;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  let t12;
  if ($[18] !== t11 || $[19] !== t9) {
    t12 = /* @__PURE__ */ jsxs("div", {
      ...t6,
      children: [t9, t11]
    });
    $[18] = t11;
    $[19] = t9;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  let t13;
  let t14;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = stylex.props(styles$1.price);
    t14 = stylex.props(styles$1.priceTitle);
    $[21] = t13;
    $[22] = t14;
  } else {
    t13 = $[21];
    t14 = $[22];
  }
  let t15;
  if ($[23] !== t) {
    t15 = t("pricing.strip20.title");
    $[23] = t;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  let t16;
  if ($[25] !== t15) {
    t16 = /* @__PURE__ */ jsx("h3", {
      ...t14,
      children: t15
    });
    $[25] = t15;
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  let t17;
  if ($[27] !== t) {
    t17 = t("pricing.strip20.desc");
    $[27] = t;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  let t18;
  if ($[29] !== t17) {
    t18 = /* @__PURE__ */ jsx("p", {
      children: t17
    });
    $[29] = t17;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  let t19;
  if ($[31] !== t16 || $[32] !== t18) {
    t19 = /* @__PURE__ */ jsxs("div", {
      ...t13,
      children: [t16, t18]
    });
    $[31] = t16;
    $[32] = t18;
    $[33] = t19;
  } else {
    t19 = $[33];
  }
  let t20;
  let t21;
  if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = stylex.props(styles$1.price);
    t21 = stylex.props(styles$1.priceTitle);
    $[34] = t20;
    $[35] = t21;
  } else {
    t20 = $[34];
    t21 = $[35];
  }
  let t22;
  if ($[36] !== t) {
    t22 = t("pricing.single.title");
    $[36] = t;
    $[37] = t22;
  } else {
    t22 = $[37];
  }
  let t23;
  if ($[38] !== t22) {
    t23 = /* @__PURE__ */ jsx("h3", {
      ...t21,
      children: t22
    });
    $[38] = t22;
    $[39] = t23;
  } else {
    t23 = $[39];
  }
  let t24;
  if ($[40] !== t) {
    t24 = t("pricing.single.desc");
    $[40] = t;
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  let t25;
  if ($[42] !== t24) {
    t25 = /* @__PURE__ */ jsx("p", {
      children: t24
    });
    $[42] = t24;
    $[43] = t25;
  } else {
    t25 = $[43];
  }
  let t26;
  if ($[44] !== t23 || $[45] !== t25) {
    t26 = /* @__PURE__ */ jsxs("div", {
      ...t20,
      children: [t23, t25]
    });
    $[44] = t23;
    $[45] = t25;
    $[46] = t26;
  } else {
    t26 = $[46];
  }
  let t27;
  let t28;
  if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
    t27 = stylex.props(styles$1.price);
    t28 = stylex.props(styles$1.priceTitle);
    $[47] = t27;
    $[48] = t28;
  } else {
    t27 = $[47];
    t28 = $[48];
  }
  let t29;
  if ($[49] !== t) {
    t29 = t("pricing.unlimited.title");
    $[49] = t;
    $[50] = t29;
  } else {
    t29 = $[50];
  }
  let t30;
  if ($[51] !== t29) {
    t30 = /* @__PURE__ */ jsx("h3", {
      ...t28,
      children: t29
    });
    $[51] = t29;
    $[52] = t30;
  } else {
    t30 = $[52];
  }
  let t31;
  if ($[53] !== t) {
    t31 = t("pricing.unlimited.desc");
    $[53] = t;
    $[54] = t31;
  } else {
    t31 = $[54];
  }
  let t32;
  if ($[55] !== t31) {
    t32 = /* @__PURE__ */ jsx("p", {
      children: t31
    });
    $[55] = t31;
    $[56] = t32;
  } else {
    t32 = $[56];
  }
  let t33;
  if ($[57] !== t30 || $[58] !== t32) {
    t33 = /* @__PURE__ */ jsxs("div", {
      ...t27,
      children: [t30, t32]
    });
    $[57] = t30;
    $[58] = t32;
    $[59] = t33;
  } else {
    t33 = $[59];
  }
  let t34;
  if ($[60] !== t12 || $[61] !== t19 || $[62] !== t26 || $[63] !== t33) {
    t34 = /* @__PURE__ */ jsxs("div", {
      ...t5,
      children: [t12, t19, t26, t33]
    });
    $[60] = t12;
    $[61] = t19;
    $[62] = t26;
    $[63] = t33;
    $[64] = t34;
  } else {
    t34 = $[64];
  }
  let t35;
  if ($[65] !== t3 || $[66] !== t34) {
    t35 = /* @__PURE__ */ jsxs("section", {
      id: "pricing",
      ...t0,
      children: [t3, t4, t34]
    });
    $[65] = t3;
    $[66] = t34;
    $[67] = t35;
  } else {
    t35 = $[67];
  }
  return t35;
};
const styles = {
  signup: {
    marginBottom: "x1t84w78",
    padding: "xr6jg0x",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    background: "x1jdwrgt",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "x1m3ak92",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backdropFilter: "xgv0goc",
    boxShadow: "xehi7zf",
    border: "x1cbigqt",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: true
  },
  signupTitle: {
    textAlign: "x2b8uid",
    marginBottom: "xyi6m4r",
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    WebkitBackgroundClip: "x1t23j8t",
    WebkitTextFillColor: "xg7jpbn",
    backgroundClip: "x1ta4xzc",
    fontSize: "x66fkqt",
    fontWeight: "x117nqv4",
    $$css: true
  },
  signupImage: {
    textAlign: "x2b8uid",
    marginBottom: "x1t84w78",
    $$css: true
  },
  signupIconContainer: {
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    height: "x1vd4hg5",
    background: "x1fbdsgv",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backdropFilter: "xgv0goc",
    border: "x1apra6z",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    maxWidth: "xrlsmeg",
    $$css: true
  },
  signupIconSvg: {
    animationName: "xcytrcn",
    animationDuration: "xeaay5l",
    animationTimingFunction: "x4hg4is",
    animationIterationCount: "xa4qsjk",
    maxWidth: "x193iq5w",
    height: "xt7dq6l",
    willChange: "x1so62im",
    $$css: true
  },
  signupForm: {
    textAlign: "x2b8uid",
    marginTop: "x1cl2iem",
    $$css: true
  },
  signupFormElement: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    gap: "x8fetqu",
    rowGap: null,
    columnGap: null,
    maxWidth: "x1j9u4d2",
    margin: "x19bbpc0",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: true
  },
  formInput: {
    padding: "x7gbtqy",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    border: "x150ed17",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "x18zih8k",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: "xh8yej3",
    boxSizing: "x9f619",
    $$css: true
  },
  formTextarea: {
    padding: "x7gbtqy",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    border: "x150ed17",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "x18zih8k",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: "xh8yej3",
    boxSizing: "x9f619",
    $$css: true
  },
  formButton: {
    padding: "x3y0hvx",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    background: "x19s1j8i",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1awj2ng",
    border: "x1gs6z28",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "xaszc3p",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    cursor: "x1ypdohk",
    transition: "x10gahu4",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    fontWeight: "x117nqv4",
    textTransform: "xtvhhri",
    letterSpacing: "x1r0g7yl",
    boxShadow: "x136zwnp",
    ":hover_background": "xiqas7b",
    ":hover_backgroundAttachment": null,
    ":hover_backgroundClip": null,
    ":hover_backgroundColor": null,
    ":hover_backgroundImage": null,
    ":hover_backgroundOrigin": null,
    ":hover_backgroundPosition": null,
    ":hover_backgroundPositionX": null,
    ":hover_backgroundPositionY": null,
    ":hover_backgroundRepeat": null,
    ":hover_backgroundSize": null,
    ":hover_transform": "x1lz31oe",
    ":hover_boxShadow": "x5e0gjt",
    $$css: true
  },
  contactSection: {
    marginTop: "x1cl2iem",
    padding: "xis3749",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    background: "x7a245a",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: "xn5hx6u",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: "xdxugh6",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: true
  },
  contactTitle: {
    fontWeight: "x117nqv4",
    marginBottom: "xyi6m4r",
    color: "x1525slw",
    fontSize: "x1hptrd9",
    $$css: true
  },
  contactLinks: {
    display: "x78zum5",
    justifyContent: "xl56j7k",
    gap: "x1h4iudz",
    rowGap: null,
    columnGap: null,
    marginBottom: "xyi6m4r",
    $$css: true
  },
  contactLink: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x13z6uf9",
    rowGap: null,
    columnGap: null,
    padding: "x1nbopsb",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    textDecoration: "x1hl2dhg",
    textDecorationColor: null,
    textDecorationLine: null,
    textDecorationStyle: null,
    textDecorationThickness: null,
    borderRadius: "xaszc3p",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    transition: "x10gahu4",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    fontWeight: "xk50ysn",
    $$css: true
  },
  emailLink: {
    background: "x1jw900r",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1awj2ng",
    boxShadow: "x1qrktc1",
    ":hover_background": "xeigimw",
    ":hover_backgroundAttachment": null,
    ":hover_backgroundClip": null,
    ":hover_backgroundColor": null,
    ":hover_backgroundImage": null,
    ":hover_backgroundOrigin": null,
    ":hover_backgroundPosition": null,
    ":hover_backgroundPositionX": null,
    ":hover_backgroundPositionY": null,
    ":hover_backgroundRepeat": null,
    ":hover_backgroundSize": null,
    ":hover_transform": "x1lz31oe",
    ":hover_boxShadow": "x8uofc2",
    $$css: true
  },
  instagramLink: {
    background: "xg6j2ye",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    color: "x1awj2ng",
    boxShadow: "xhnaxvs",
    ":hover_background": "x1ijmkb8",
    ":hover_backgroundAttachment": null,
    ":hover_backgroundClip": null,
    ":hover_backgroundColor": null,
    ":hover_backgroundImage": null,
    ":hover_backgroundOrigin": null,
    ":hover_backgroundPosition": null,
    ":hover_backgroundPositionX": null,
    ":hover_backgroundPositionY": null,
    ":hover_backgroundRepeat": null,
    ":hover_backgroundSize": null,
    ":hover_transform": "x1lz31oe",
    ":hover_boxShadow": "x1oi22m",
    $$css: true
  },
  contactLinkIcon: {
    width: "xw4jnvo",
    height: "x1qx5ct2",
    $$css: true
  },
  followText: {
    marginTop: "xj1urod",
    fontStyle: "x1k4tb9n",
    color: "x33gn0b",
    $$css: true
  },
  signupMobile: {
    "@media (max-width: 768px)_padding": "x1kyy2cf",
    "@media (max-width: 768px)_paddingInline": null,
    "@media (max-width: 768px)_paddingStart": null,
    "@media (max-width: 768px)_paddingLeft": null,
    "@media (max-width: 768px)_paddingEnd": null,
    "@media (max-width: 768px)_paddingRight": null,
    "@media (max-width: 768px)_paddingBlock": null,
    "@media (max-width: 768px)_paddingTop": null,
    "@media (max-width: 768px)_paddingBottom": null,
    $$css: true
  },
  signupIconContainerMobile: {
    "@media (max-width: 768px)_width": "x1i8vjtc",
    "@media (max-width: 768px)_maxWidth": "xcu46eb",
    "@media (max-width: 768px)_height": "xjsx6d0",
    "@media (max-width: 768px)_margin": "x1i06gni",
    "@media (max-width: 768px)_marginInline": null,
    "@media (max-width: 768px)_marginInlineStart": null,
    "@media (max-width: 768px)_marginLeft": null,
    "@media (max-width: 768px)_marginInlineEnd": null,
    "@media (max-width: 768px)_marginRight": null,
    "@media (max-width: 768px)_marginBlock": null,
    "@media (max-width: 768px)_marginTop": null,
    "@media (max-width: 768px)_marginBottom": null,
    $$css: true
  },
  signupIconSvgMobile: {
    "@media (max-width: 768px)_width": "xiwwzun",
    "@media (max-width: 768px)_maxWidth": "x1e8r7he",
    "@media (max-width: 768px)_height": "x1rys8o5",
    $$css: true
  },
  contactLinksMobile: {
    "@media (max-width: 768px)_flexDirection": "x1mx85iw",
    "@media (max-width: 768px)_gap": "x1x97ot6",
    "@media (max-width: 768px)_rowGap": null,
    "@media (max-width: 768px)_columnGap": null,
    "@media (max-width: 768px)_alignItems": "xmpd8g6",
    $$css: true
  },
  contactLinkMobile: {
    "@media (max-width: 768px)_width": "x1i8vjtc",
    "@media (max-width: 768px)_maxWidth": "x1bn0wnd",
    "@media (max-width: 768px)_justifyContent": "x1cw82h",
    $$css: true
  }
};
const SignupSection = () => {
  const $ = c(81);
  const {
    t
  } = useTranslation();
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = stylex.props(styles.signup, styles.signupMobile);
    t1 = stylex.props(styles.signupTitle);
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t) {
    t2 = t("signup.title");
    $[2] = t;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("h2", {
      ...t1,
      children: t2
    });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  let t5;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles.signupImage),
      children: /* @__PURE__ */ jsx("div", {
        ...stylex.props(styles.signupIconContainer, styles.signupIconContainerMobile),
        children: /* @__PURE__ */ jsx("div", {
          ...stylex.props(styles.signupIconSvg, styles.signupIconSvgMobile),
          children: /* @__PURE__ */ jsx(SignupIcon, {})
        })
      })
    });
    t5 = stylex.props(styles.signupForm);
    $[6] = t4;
    $[7] = t5;
  } else {
    t4 = $[6];
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t) {
    t6 = t("signup.signupNow");
    $[8] = t;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== t6) {
    t7 = /* @__PURE__ */ jsx("p", {
      children: t6
    });
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== t) {
    t8 = t("signup.nice");
    $[12] = t;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  let t9;
  if ($[14] !== t8) {
    t9 = /* @__PURE__ */ jsx("p", {
      children: t8
    });
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  let t10;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = stylex.props(styles.signupFormElement);
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] !== t) {
    t11 = t("form.name");
    $[17] = t;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  let t12;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = stylex.props(styles.formInput);
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  let t13;
  if ($[20] !== t11) {
    t13 = /* @__PURE__ */ jsx("input", {
      type: "text",
      placeholder: t11,
      ...t12
    });
    $[20] = t11;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  let t14;
  if ($[22] !== t) {
    t14 = t("form.email");
    $[22] = t;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  let t15;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = stylex.props(styles.formInput);
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  let t16;
  if ($[25] !== t14) {
    t16 = /* @__PURE__ */ jsx("input", {
      type: "email",
      placeholder: t14,
      ...t15
    });
    $[25] = t14;
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  let t17;
  if ($[27] !== t) {
    t17 = t("form.message");
    $[27] = t;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  let t18;
  if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = stylex.props(styles.formTextarea);
    $[29] = t18;
  } else {
    t18 = $[29];
  }
  let t19;
  if ($[30] !== t17) {
    t19 = /* @__PURE__ */ jsx("textarea", {
      placeholder: t17,
      ...t18
    });
    $[30] = t17;
    $[31] = t19;
  } else {
    t19 = $[31];
  }
  let t20;
  if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = stylex.props(styles.formButton);
    $[32] = t20;
  } else {
    t20 = $[32];
  }
  let t21;
  if ($[33] !== t) {
    t21 = t("form.submit");
    $[33] = t;
    $[34] = t21;
  } else {
    t21 = $[34];
  }
  let t22;
  if ($[35] !== t21) {
    t22 = /* @__PURE__ */ jsx("button", {
      type: "submit",
      ...t20,
      children: t21
    });
    $[35] = t21;
    $[36] = t22;
  } else {
    t22 = $[36];
  }
  let t23;
  if ($[37] !== t13 || $[38] !== t16 || $[39] !== t19 || $[40] !== t22) {
    t23 = /* @__PURE__ */ jsxs("form", {
      ...t10,
      children: [t13, t16, t19, t22]
    });
    $[37] = t13;
    $[38] = t16;
    $[39] = t19;
    $[40] = t22;
    $[41] = t23;
  } else {
    t23 = $[41];
  }
  let t24;
  let t25;
  if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
    t24 = stylex.props(styles.contactSection);
    t25 = stylex.props(styles.contactTitle);
    $[42] = t24;
    $[43] = t25;
  } else {
    t24 = $[42];
    t25 = $[43];
  }
  let t26;
  if ($[44] !== t) {
    t26 = t("signup.contactUs");
    $[44] = t;
    $[45] = t26;
  } else {
    t26 = $[45];
  }
  let t27;
  if ($[46] !== t26) {
    t27 = /* @__PURE__ */ jsx("p", {
      ...t25,
      children: t26
    });
    $[46] = t26;
    $[47] = t27;
  } else {
    t27 = $[47];
  }
  let t28;
  if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = stylex.props(styles.contactLinks, styles.contactLinksMobile);
    $[48] = t28;
  } else {
    t28 = $[48];
  }
  let t29;
  let t30;
  if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = stylex.props(styles.contactLink, styles.emailLink, styles.contactLinkMobile);
    t30 = /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles.contactLinkIcon),
      children: /* @__PURE__ */ jsx(EmailIcon, {})
    });
    $[49] = t29;
    $[50] = t30;
  } else {
    t29 = $[49];
    t30 = $[50];
  }
  let t31;
  if ($[51] !== t) {
    t31 = t("signup.email");
    $[51] = t;
    $[52] = t31;
  } else {
    t31 = $[52];
  }
  let t32;
  if ($[53] !== t31) {
    t32 = /* @__PURE__ */ jsxs("a", {
      href: "mailto:info@leveluptraining.nl",
      ...t29,
      children: [t30, /* @__PURE__ */ jsx("span", {
        children: t31
      })]
    });
    $[53] = t31;
    $[54] = t32;
  } else {
    t32 = $[54];
  }
  let t33;
  let t34;
  if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
    t33 = stylex.props(styles.contactLink, styles.instagramLink, styles.contactLinkMobile);
    t34 = /* @__PURE__ */ jsx("div", {
      ...stylex.props(styles.contactLinkIcon),
      children: /* @__PURE__ */ jsx(InstagramIcon, {})
    });
    $[55] = t33;
    $[56] = t34;
  } else {
    t33 = $[55];
    t34 = $[56];
  }
  let t35;
  if ($[57] !== t) {
    t35 = t("signup.instagram");
    $[57] = t;
    $[58] = t35;
  } else {
    t35 = $[58];
  }
  let t36;
  if ($[59] !== t35) {
    t36 = /* @__PURE__ */ jsxs("a", {
      href: "https://instagram.com/leveluptraining",
      target: "_blank",
      rel: "noopener noreferrer",
      ...t33,
      children: [t34, /* @__PURE__ */ jsx("span", {
        children: t35
      })]
    });
    $[59] = t35;
    $[60] = t36;
  } else {
    t36 = $[60];
  }
  let t37;
  if ($[61] !== t32 || $[62] !== t36) {
    t37 = /* @__PURE__ */ jsxs("div", {
      ...t28,
      children: [t32, t36]
    });
    $[61] = t32;
    $[62] = t36;
    $[63] = t37;
  } else {
    t37 = $[63];
  }
  let t38;
  if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
    t38 = stylex.props(styles.followText);
    $[64] = t38;
  } else {
    t38 = $[64];
  }
  let t39;
  if ($[65] !== t) {
    t39 = t("signup.follow");
    $[65] = t;
    $[66] = t39;
  } else {
    t39 = $[66];
  }
  let t40;
  if ($[67] !== t39) {
    t40 = /* @__PURE__ */ jsx("p", {
      ...t38,
      children: t39
    });
    $[67] = t39;
    $[68] = t40;
  } else {
    t40 = $[68];
  }
  let t41;
  if ($[69] !== t27 || $[70] !== t37 || $[71] !== t40) {
    t41 = /* @__PURE__ */ jsxs("div", {
      ...t24,
      children: [t27, t37, t40]
    });
    $[69] = t27;
    $[70] = t37;
    $[71] = t40;
    $[72] = t41;
  } else {
    t41 = $[72];
  }
  let t42;
  if ($[73] !== t23 || $[74] !== t41 || $[75] !== t7 || $[76] !== t9) {
    t42 = /* @__PURE__ */ jsxs("div", {
      ...t5,
      children: [t7, t9, t23, t41]
    });
    $[73] = t23;
    $[74] = t41;
    $[75] = t7;
    $[76] = t9;
    $[77] = t42;
  } else {
    t42 = $[77];
  }
  let t43;
  if ($[78] !== t3 || $[79] !== t42) {
    t43 = /* @__PURE__ */ jsxs("section", {
      id: "signup",
      ...t0,
      children: [t3, t4, t42]
    });
    $[78] = t3;
    $[79] = t42;
    $[80] = t43;
  } else {
    t43 = $[80];
  }
  return t43;
};
const home = UNSAFE_withComponentProps(function Home() {
  const $ = c(8);
  const location = useLocation();
  let t0;
  let t1;
  if ($[0] !== location.hash) {
    t0 = () => {
      const scrollToSection = () => {
        const hash = location.hash.replace("#", "");
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      };
      const timeoutId = setTimeout(scrollToSection, 100);
      return () => clearTimeout(timeoutId);
    };
    t1 = [location.hash];
    $[0] = location.hash;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useEffect(t0, t1);
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("section", {
      id: "hero",
      "aria-labelledby": "hero-title",
      children: /* @__PURE__ */ jsx(HeroSection, {})
    });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("section", {
      id: "trainings",
      "aria-labelledby": "trainings-title",
      children: /* @__PURE__ */ jsx(TrainingsSection, {})
    });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("section", {
      id: "schedule",
      "aria-labelledby": "schedule-title",
      children: /* @__PURE__ */ jsx(ScheduleSection, {})
    });
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx("section", {
      id: "pricing",
      "aria-labelledby": "pricing-title",
      children: /* @__PURE__ */ jsx(PricingSection, {})
    });
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs(Fragment, {
      children: [t2, t3, t4, t5, /* @__PURE__ */ jsx("section", {
        id: "signup",
        "aria-labelledby": "signup-title",
        children: /* @__PURE__ */ jsx(SignupSection, {})
      })]
    });
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  return t6;
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-mBydkK4D.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/i18n-CTG4v3OK.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BsNwGEO-.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/i18n-CTG4v3OK.js", "/assets/i18nInstance-CHFDjdcJ.js", "/assets/stylex-DhFcWJjZ.js"], "css": ["/assets/root-Cn-LKyTh.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layouts/main": { "id": "layouts/main", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/main-Dl8ViA20.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/stylex-DhFcWJjZ.js", "/assets/i18n-CTG4v3OK.js", "/assets/InstagramIcon-Bq8kZdDI.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "layouts/main", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-uNwqnDGZ.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/stylex-DhFcWJjZ.js", "/assets/InstagramIcon-Bq8kZdDI.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-96dbc5be.js", "version": "96dbc5be", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "layouts/main": {
    id: "layouts/main",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "layouts/main",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
