import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import { ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Outlet, Meta, Links, ScrollRestoration, Scripts, useLocation } from "react-router";
import { c } from "react/compiler-runtime";
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
function Layout(t0) {
  const $ = c(6);
  const {
    children
  } = t0;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("head", {
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
    t2 = /* @__PURE__ */ jsx("a", {
      href: "#main-content",
      className: "skip-link",
      children: "Skip to main content"
    });
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  let t3;
  let t4;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(ScrollRestoration, {});
    t4 = /* @__PURE__ */ jsx(Scripts, {});
    $[2] = t3;
    $[3] = t4;
  } else {
    t3 = $[2];
    t4 = $[3];
  }
  let t5;
  if ($[4] !== children) {
    t5 = /* @__PURE__ */ jsxs("html", {
      lang: "en",
      children: [t1, /* @__PURE__ */ jsxs("body", {
        children: [t2, children, t3, t4]
      })]
    });
    $[4] = children;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  return t5;
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
const HeaderSection = () => {
  const $ = c(28);
  const {
    t
  } = useTranslation();
  const changeLanguage = _temp$2;
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("div", { className: "logo", children: "Level Up" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("div", { className: "language-selector", role: "group", "aria-label": "Language selection", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => changeLanguage("en"), "aria-label": "Switch to English", type: "button", children: "EN" }),
      /* @__PURE__ */ jsx("button", { onClick: () => changeLanguage("nl"), "aria-label": "Switch to Dutch", type: "button", children: "NL" }),
      /* @__PURE__ */ jsx("button", { onClick: () => changeLanguage("es"), "aria-label": "Switch to Spanish", type: "button", children: "ES" })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t) {
    t2 = t("nav.home");
    $[2] = t;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx("a", { href: "#hero", role: "menuitem", children: t2 }) });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== t) {
    t4 = t("nav.trainings");
    $[6] = t;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t4) {
    t5 = /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx("a", { href: "#trainings", role: "menuitem", children: t4 }) });
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== t) {
    t6 = t("nav.schedule");
    $[10] = t;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== t6) {
    t7 = /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx("a", { href: "#schedule", role: "menuitem", children: t6 }) });
    $[12] = t6;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  let t8;
  if ($[14] !== t) {
    t8 = t("nav.pricing");
    $[14] = t;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  let t9;
  if ($[16] !== t8) {
    t9 = /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx("a", { href: "#pricing", role: "menuitem", children: t8 }) });
    $[16] = t8;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  let t10;
  if ($[18] !== t) {
    t10 = t("nav.contact");
    $[18] = t;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] !== t10) {
    t11 = /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsx("a", { href: "#signup", role: "menuitem", children: t10 }) });
    $[20] = t10;
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  let t12;
  if ($[22] !== t11 || $[23] !== t3 || $[24] !== t5 || $[25] !== t7 || $[26] !== t9) {
    t12 = /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("nav", { role: "navigation", "aria-label": "Main navigation", children: [
      t0,
      t1,
      /* @__PURE__ */ jsxs("ul", { role: "menubar", children: [
        t3,
        t5,
        t7,
        t9,
        t11
      ] })
    ] }) });
    $[22] = t11;
    $[23] = t3;
    $[24] = t5;
    $[25] = t7;
    $[26] = t9;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  return t12;
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
const FooterSection = () => {
  const $ = c(6);
  const {
    t
  } = useTranslation();
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxs("a", { href: "mailto:info@leveluptraining.nl", className: "footer-link", children: [
      /* @__PURE__ */ jsx(EmailIcon, { width: 18, height: 18 }),
      "info@leveluptraining.nl"
    ] });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("div", { className: "footer-contacts", children: [
      t0,
      /* @__PURE__ */ jsxs("a", { href: "https://instagram.com/leveluptraining", target: "_blank", rel: "noopener noreferrer", className: "footer-link", children: [
        /* @__PURE__ */ jsx(InstagramIcon, { width: 18, height: 18 }),
        "@leveluptraining"
      ] })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t) {
    t2 = t("footer.copyright");
    $[2] = t;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "footer-content", children: [
      t1,
      /* @__PURE__ */ jsx("p", { children: t2 })
    ] }) });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
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
const main = UNSAFE_withComponentProps(function MainLayout() {
  const $ = c(3);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(SEOHead, {
      title: "Level Up Training - Outdoor Personal Training in The Hague",
      description: "Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training. Try a free trial week!",
      keywords: "personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(HeaderSection, {});
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs(Fragment, {
      children: [t0, /* @__PURE__ */ jsxs("div", {
        className: "app",
        children: [t1, /* @__PURE__ */ jsx("main", {
          id: "main-content",
          role: "main",
          children: /* @__PURE__ */ jsx(Outlet, {})
        }), /* @__PURE__ */ jsx(FooterSection, {})]
      })]
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: main
}, Symbol.toStringTag, { value: "Module" }));
const HeroSection = () => {
  const $ = c(24);
  const {
    t
  } = useTranslation();
  let t0;
  if ($[0] !== t) {
    t0 = t("hero.title");
    $[0] = t;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== t0) {
    t1 = /* @__PURE__ */ jsx("h1", { children: t0 });
    $[2] = t0;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== t) {
    t2 = t("hero.subtitle");
    $[4] = t;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== t2) {
    t3 = /* @__PURE__ */ jsx("h2", { children: t2 });
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t) {
    t4 = t("hero.tagline");
    $[8] = t;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== t4) {
    t5 = /* @__PURE__ */ jsx("p", { children: t4 });
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== t) {
    t6 = t("hero.description");
    $[12] = t;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== t6) {
    t7 = /* @__PURE__ */ jsx("p", { children: t6 });
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t1 || $[17] !== t3 || $[18] !== t5 || $[19] !== t7) {
    t8 = /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
      t1,
      t3,
      t5,
      t7
    ] });
    $[16] = t1;
    $[17] = t3;
    $[18] = t5;
    $[19] = t7;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsx("div", { className: "hero-image", children: /* @__PURE__ */ jsx("img", { src: "/images/strength-training.jpg", alt: "Professional strength training session outdoors", fetchPriority: "high", decoding: "sync", width: "800", height: "600" }) });
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  let t10;
  if ($[22] !== t8) {
    t10 = /* @__PURE__ */ jsxs("section", { id: "hero", className: "hero", children: [
      t8,
      t9
    ] });
    $[22] = t8;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  return t10;
};
const TrainingCard = (t0) => {
  const $ = c(12);
  const {
    title,
    description,
    imageSrc,
    imageAlt
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      display: "block",
      backgroundColor: "#f0f0f0"
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== imageAlt || $[2] !== imageSrc) {
    t2 = /* @__PURE__ */ jsx("div", { className: "training-image", children: /* @__PURE__ */ jsx("img", { src: imageSrc, alt: imageAlt, loading: "lazy", decoding: "async", width: "800", height: "600", style: t1, onLoad: _temp, onError: _temp2 }) });
    $[1] = imageAlt;
    $[2] = imageSrc;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== title) {
    t3 = /* @__PURE__ */ jsx("h3", { children: title });
    $[4] = title;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== description) {
    t4 = /* @__PURE__ */ jsx("p", { children: description });
    $[6] = description;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
    t5 = /* @__PURE__ */ jsxs("div", { className: "training", children: [
      t2,
      t3,
      t4
    ] });
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
};
function _temp() {
}
function _temp2() {
}
const TrainingsSection = () => {
  const $ = c(41);
  const {
    t
  } = useTranslation();
  let t0;
  if ($[0] !== t) {
    t0 = t("trainings.title");
    $[0] = t;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== t0) {
    t1 = /* @__PURE__ */ jsx("h2", { children: t0 });
    $[2] = t0;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== t) {
    t2 = t("trainings.level1.title");
    $[4] = t;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== t) {
    t3 = t("trainings.level1.desc");
    $[6] = t;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t) {
    t4 = t("trainings.level1.imageAlt");
    $[8] = t;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== t2 || $[11] !== t3 || $[12] !== t4) {
    t5 = /* @__PURE__ */ jsx(TrainingCard, { title: t2, description: t3, imageSrc: "/images/strength-training.jpg", imageAlt: t4 });
    $[10] = t2;
    $[11] = t3;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  let t6;
  if ($[14] !== t) {
    t6 = t("trainings.level2.title");
    $[14] = t;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] !== t) {
    t7 = t("trainings.level2.desc");
    $[16] = t;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  let t8;
  if ($[18] !== t) {
    t8 = t("trainings.level2.imageAlt");
    $[18] = t;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  let t9;
  if ($[20] !== t6 || $[21] !== t7 || $[22] !== t8) {
    t9 = /* @__PURE__ */ jsx(TrainingCard, { title: t6, description: t7, imageSrc: "/images/running-training.jpg", imageAlt: t8 });
    $[20] = t6;
    $[21] = t7;
    $[22] = t8;
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  let t10;
  if ($[24] !== t) {
    t10 = t("trainings.level3.title");
    $[24] = t;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  let t11;
  if ($[26] !== t) {
    t11 = t("trainings.level3.desc");
    $[26] = t;
    $[27] = t11;
  } else {
    t11 = $[27];
  }
  let t12;
  if ($[28] !== t) {
    t12 = t("trainings.level3.imageAlt");
    $[28] = t;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  let t13;
  if ($[30] !== t10 || $[31] !== t11 || $[32] !== t12) {
    t13 = /* @__PURE__ */ jsx(TrainingCard, { title: t10, description: t11, imageSrc: "/images/parent-child-training.jpg", imageAlt: t12 });
    $[30] = t10;
    $[31] = t11;
    $[32] = t12;
    $[33] = t13;
  } else {
    t13 = $[33];
  }
  let t14;
  if ($[34] !== t13 || $[35] !== t5 || $[36] !== t9) {
    t14 = /* @__PURE__ */ jsxs("div", { className: "trainings-grid", children: [
      t5,
      t9,
      t13
    ] });
    $[34] = t13;
    $[35] = t5;
    $[36] = t9;
    $[37] = t14;
  } else {
    t14 = $[37];
  }
  let t15;
  if ($[38] !== t1 || $[39] !== t14) {
    t15 = /* @__PURE__ */ jsxs("section", { id: "trainings", className: "trainings", children: [
      t1,
      t14
    ] });
    $[38] = t1;
    $[39] = t14;
    $[40] = t15;
  } else {
    t15 = $[40];
  }
  return t15;
};
const LocationCard = (t0) => {
  const $ = c(29);
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
  if ($[0] !== title) {
    t3 = /* @__PURE__ */ jsx("h4", { children: title });
    $[0] = title;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] !== comingSoonText || $[3] !== isComingSoon) {
    t4 = isComingSoon && /* @__PURE__ */ jsx("div", { className: "training-time coming-soon", children: comingSoonText });
    $[2] = comingSoonText;
    $[3] = isComingSoon;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== time) {
    t5 = /* @__PURE__ */ jsx("div", { className: "training-time", children: time });
    $[5] = time;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== type) {
    t6 = /* @__PURE__ */ jsx("div", { className: "training-type", children: type });
    $[7] = type;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] !== capacity) {
    t7 = /* @__PURE__ */ jsx("div", { className: "training-capacity", children: capacity });
    $[9] = capacity;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== location) {
    t8 = /* @__PURE__ */ jsx("div", { className: "training-location", children: location });
    $[11] = location;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== dates) {
    t9 = dates && /* @__PURE__ */ jsx("div", { className: "training-dates", children: dates });
    $[13] = dates;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  let t10;
  if ($[15] !== t4 || $[16] !== t5 || $[17] !== t6 || $[18] !== t7 || $[19] !== t8 || $[20] !== t9) {
    t10 = /* @__PURE__ */ jsxs("div", { className: "location-details", children: [
      t4,
      t5,
      t6,
      t7,
      t8,
      t9
    ] });
    $[15] = t4;
    $[16] = t5;
    $[17] = t6;
    $[18] = t7;
    $[19] = t8;
    $[20] = t9;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  let t11;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = {
      border: 0,
      borderRadius: "8px"
    };
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  let t12;
  if ($[23] !== mapSrc) {
    t12 = /* @__PURE__ */ jsx("div", { className: "map-container", children: /* @__PURE__ */ jsx("iframe", { src: mapSrc, width: "100%", height: "200", style: t11, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) });
    $[23] = mapSrc;
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  let t13;
  if ($[25] !== t10 || $[26] !== t12 || $[27] !== t3) {
    t13 = /* @__PURE__ */ jsxs("div", { className: "location-card", children: [
      t3,
      t10,
      t12
    ] });
    $[25] = t10;
    $[26] = t12;
    $[27] = t3;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  return t13;
};
const ScheduleSection = () => {
  const $ = c(89);
  const {
    t
  } = useTranslation();
  let t0;
  if ($[0] !== t) {
    t0 = t("schedule.title");
    $[0] = t;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== t0) {
    t1 = /* @__PURE__ */ jsx("h2", { children: t0 });
    $[2] = t0;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== t) {
    t2 = t("schedule.locationsTitle");
    $[4] = t;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== t2) {
    t3 = /* @__PURE__ */ jsx("h3", { children: t2 });
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t) {
    t4 = t("schedule.locations.peacePalace.title");
    $[8] = t;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== t) {
    t5 = t("schedule.locations.peacePalace.time");
    $[10] = t;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== t) {
    t6 = t("schedule.locations.peacePalace.type");
    $[12] = t;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== t) {
    t7 = t("schedule.locations.peacePalace.capacity");
    $[14] = t;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t) {
    t8 = t("schedule.locations.peacePalace.location");
    $[16] = t;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] !== t4 || $[19] !== t5 || $[20] !== t6 || $[21] !== t7 || $[22] !== t8) {
    t9 = /* @__PURE__ */ jsx(LocationCard, { title: t4, time: t5, type: t6, capacity: t7, location: t8, mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.8934567890!2d4.287647315708086!3d52.10516097972684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6a7e1b02a59%3A0x5f1b6a7e1b02a59!2sPeace%20Palace%2C%20Carnegieplein%202%2C%202517%20KJ%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456789" });
    $[18] = t4;
    $[19] = t5;
    $[20] = t6;
    $[21] = t7;
    $[22] = t8;
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  let t10;
  if ($[24] !== t) {
    t10 = t("schedule.locations.scheveningse.title");
    $[24] = t;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  let t11;
  if ($[26] !== t) {
    t11 = t("schedule.locations.scheveningse.time");
    $[26] = t;
    $[27] = t11;
  } else {
    t11 = $[27];
  }
  let t12;
  if ($[28] !== t) {
    t12 = t("schedule.locations.scheveningse.type");
    $[28] = t;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  let t13;
  if ($[30] !== t) {
    t13 = t("schedule.locations.scheveningse.capacity");
    $[30] = t;
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  let t14;
  if ($[32] !== t) {
    t14 = t("schedule.locations.scheveningse.location");
    $[32] = t;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  let t15;
  if ($[34] !== t10 || $[35] !== t11 || $[36] !== t12 || $[37] !== t13 || $[38] !== t14) {
    t15 = /* @__PURE__ */ jsx(LocationCard, { title: t10, time: t11, type: t12, capacity: t13, location: t14, mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.3326386195881!2d4.335391910669067!3d52.0488124708928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6f4c5d05b47%3A0xc9bfa2760dec51c3!2s2282%20JR%20Rijswijk!5e1!3m2!1sen!2snl!4v1759050133365!5m2!1sen!2snl" });
    $[34] = t10;
    $[35] = t11;
    $[36] = t12;
    $[37] = t13;
    $[38] = t14;
    $[39] = t15;
  } else {
    t15 = $[39];
  }
  let t16;
  if ($[40] !== t) {
    t16 = t("schedule.locations.indischMonument.title");
    $[40] = t;
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  let t17;
  if ($[42] !== t) {
    t17 = t("schedule.locations.indischMonument.time");
    $[42] = t;
    $[43] = t17;
  } else {
    t17 = $[43];
  }
  let t18;
  if ($[44] !== t) {
    t18 = t("schedule.locations.indischMonument.type");
    $[44] = t;
    $[45] = t18;
  } else {
    t18 = $[45];
  }
  let t19;
  if ($[46] !== t) {
    t19 = t("schedule.locations.indischMonument.capacity");
    $[46] = t;
    $[47] = t19;
  } else {
    t19 = $[47];
  }
  let t20;
  if ($[48] !== t) {
    t20 = t("schedule.locations.indischMonument.location");
    $[48] = t;
    $[49] = t20;
  } else {
    t20 = $[49];
  }
  let t21;
  if ($[50] !== t) {
    t21 = t("schedule.locations.indischMonument.dates");
    $[50] = t;
    $[51] = t21;
  } else {
    t21 = $[51];
  }
  let t22;
  if ($[52] !== t16 || $[53] !== t17 || $[54] !== t18 || $[55] !== t19 || $[56] !== t20 || $[57] !== t21) {
    t22 = /* @__PURE__ */ jsx(LocationCard, { title: t16, time: t17, type: t18, capacity: t19, location: t20, mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.123!2d4.301234!3d52.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b8d5e6f7a8b9%3A0x1a2b3c4d5e6f7a8b!2sIndisch%20Monument%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456791", dates: t21 });
    $[52] = t16;
    $[53] = t17;
    $[54] = t18;
    $[55] = t19;
    $[56] = t20;
    $[57] = t21;
    $[58] = t22;
  } else {
    t22 = $[58];
  }
  let t23;
  if ($[59] !== t) {
    t23 = t("schedule.locations.verademing.title");
    $[59] = t;
    $[60] = t23;
  } else {
    t23 = $[60];
  }
  let t24;
  if ($[61] !== t) {
    t24 = t("schedule.locations.verademing.time");
    $[61] = t;
    $[62] = t24;
  } else {
    t24 = $[62];
  }
  let t25;
  if ($[63] !== t) {
    t25 = t("schedule.locations.verademing.type");
    $[63] = t;
    $[64] = t25;
  } else {
    t25 = $[64];
  }
  let t26;
  if ($[65] !== t) {
    t26 = t("schedule.locations.verademing.capacity");
    $[65] = t;
    $[66] = t26;
  } else {
    t26 = $[66];
  }
  let t27;
  if ($[67] !== t) {
    t27 = t("schedule.locations.verademing.location");
    $[67] = t;
    $[68] = t27;
  } else {
    t27 = $[68];
  }
  let t28;
  if ($[69] !== t) {
    t28 = t("schedule.comingSoon");
    $[69] = t;
    $[70] = t28;
  } else {
    t28 = $[70];
  }
  let t29;
  if ($[71] !== t23 || $[72] !== t24 || $[73] !== t25 || $[74] !== t26 || $[75] !== t27 || $[76] !== t28) {
    t29 = /* @__PURE__ */ jsx(LocationCard, { title: t23, time: t24, type: t25, capacity: t26, location: t27, mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.456!2d4.283456!3d52.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b9e1f2a3b4c5%3A0x6d7e8f9a0b1c2d3e!2sDe%20Verademing%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456792", isComingSoon: true, comingSoonText: t28 });
    $[71] = t23;
    $[72] = t24;
    $[73] = t25;
    $[74] = t26;
    $[75] = t27;
    $[76] = t28;
    $[77] = t29;
  } else {
    t29 = $[77];
  }
  let t30;
  if ($[78] !== t15 || $[79] !== t22 || $[80] !== t29 || $[81] !== t9) {
    t30 = /* @__PURE__ */ jsxs("div", { className: "locations-grid", children: [
      t9,
      t15,
      t22,
      t29
    ] });
    $[78] = t15;
    $[79] = t22;
    $[80] = t29;
    $[81] = t9;
    $[82] = t30;
  } else {
    t30 = $[82];
  }
  let t31;
  if ($[83] !== t3 || $[84] !== t30) {
    t31 = /* @__PURE__ */ jsxs("div", { className: "locations-section", children: [
      t3,
      t30
    ] });
    $[83] = t3;
    $[84] = t30;
    $[85] = t31;
  } else {
    t31 = $[85];
  }
  let t32;
  if ($[86] !== t1 || $[87] !== t31) {
    t32 = /* @__PURE__ */ jsxs("section", { id: "schedule", className: "schedule", children: [
      t1,
      t31
    ] });
    $[86] = t1;
    $[87] = t31;
    $[88] = t32;
  } else {
    t32 = $[88];
  }
  return t32;
};
const PricingSection = () => {
  const $ = c(57);
  const {
    t
  } = useTranslation();
  let t0;
  if ($[0] !== t) {
    t0 = t("pricing.title");
    $[0] = t;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== t0) {
    t1 = /* @__PURE__ */ jsx("h2", { children: t0 });
    $[2] = t0;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("div", { className: "pricing-image", children: /* @__PURE__ */ jsx("div", { className: "pricing-icon-container", children: /* @__PURE__ */ jsx(PricingIcon, {}) }) });
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== t) {
    t3 = t("pricing.strip10.title");
    $[5] = t;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== t3) {
    t4 = /* @__PURE__ */ jsx("h3", { children: t3 });
    $[7] = t3;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== t) {
    t5 = t("pricing.strip10.desc");
    $[9] = t;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== t5) {
    t6 = /* @__PURE__ */ jsx("p", { children: t5 });
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t4 || $[14] !== t6) {
    t7 = /* @__PURE__ */ jsxs("div", { className: "price", children: [
      t4,
      t6
    ] });
    $[13] = t4;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t) {
    t8 = t("pricing.strip20.title");
    $[16] = t;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] !== t8) {
    t9 = /* @__PURE__ */ jsx("h3", { children: t8 });
    $[18] = t8;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  let t10;
  if ($[20] !== t) {
    t10 = t("pricing.strip20.desc");
    $[20] = t;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  let t11;
  if ($[22] !== t10) {
    t11 = /* @__PURE__ */ jsx("p", { children: t10 });
    $[22] = t10;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] !== t11 || $[25] !== t9) {
    t12 = /* @__PURE__ */ jsxs("div", { className: "price", children: [
      t9,
      t11
    ] });
    $[24] = t11;
    $[25] = t9;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  let t13;
  if ($[27] !== t) {
    t13 = t("pricing.single.title");
    $[27] = t;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  let t14;
  if ($[29] !== t13) {
    t14 = /* @__PURE__ */ jsx("h3", { children: t13 });
    $[29] = t13;
    $[30] = t14;
  } else {
    t14 = $[30];
  }
  let t15;
  if ($[31] !== t) {
    t15 = t("pricing.single.desc");
    $[31] = t;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  let t16;
  if ($[33] !== t15) {
    t16 = /* @__PURE__ */ jsx("p", { children: t15 });
    $[33] = t15;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  let t17;
  if ($[35] !== t14 || $[36] !== t16) {
    t17 = /* @__PURE__ */ jsxs("div", { className: "price", children: [
      t14,
      t16
    ] });
    $[35] = t14;
    $[36] = t16;
    $[37] = t17;
  } else {
    t17 = $[37];
  }
  let t18;
  if ($[38] !== t) {
    t18 = t("pricing.unlimited.title");
    $[38] = t;
    $[39] = t18;
  } else {
    t18 = $[39];
  }
  let t19;
  if ($[40] !== t18) {
    t19 = /* @__PURE__ */ jsx("h3", { children: t18 });
    $[40] = t18;
    $[41] = t19;
  } else {
    t19 = $[41];
  }
  let t20;
  if ($[42] !== t) {
    t20 = t("pricing.unlimited.desc");
    $[42] = t;
    $[43] = t20;
  } else {
    t20 = $[43];
  }
  let t21;
  if ($[44] !== t20) {
    t21 = /* @__PURE__ */ jsx("p", { children: t20 });
    $[44] = t20;
    $[45] = t21;
  } else {
    t21 = $[45];
  }
  let t22;
  if ($[46] !== t19 || $[47] !== t21) {
    t22 = /* @__PURE__ */ jsxs("div", { className: "price", children: [
      t19,
      t21
    ] });
    $[46] = t19;
    $[47] = t21;
    $[48] = t22;
  } else {
    t22 = $[48];
  }
  let t23;
  if ($[49] !== t12 || $[50] !== t17 || $[51] !== t22 || $[52] !== t7) {
    t23 = /* @__PURE__ */ jsxs("div", { className: "pricing-grid", children: [
      t7,
      t12,
      t17,
      t22
    ] });
    $[49] = t12;
    $[50] = t17;
    $[51] = t22;
    $[52] = t7;
    $[53] = t23;
  } else {
    t23 = $[53];
  }
  let t24;
  if ($[54] !== t1 || $[55] !== t23) {
    t24 = /* @__PURE__ */ jsxs("section", { id: "pricing", className: "pricing", children: [
      t1,
      t2,
      t23
    ] });
    $[54] = t1;
    $[55] = t23;
    $[56] = t24;
  } else {
    t24 = $[56];
  }
  return t24;
};
const SignupSection = () => {
  const $ = c(67);
  const {
    t
  } = useTranslation();
  let t0;
  if ($[0] !== t) {
    t0 = t("signup.title");
    $[0] = t;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] !== t0) {
    t1 = /* @__PURE__ */ jsx("h2", { children: t0 });
    $[2] = t0;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("div", { className: "signup-image", children: /* @__PURE__ */ jsx("div", { className: "signup-icon-container", children: /* @__PURE__ */ jsx(SignupIcon, {}) }) });
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== t) {
    t3 = t("signup.signupNow");
    $[5] = t;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== t3) {
    t4 = /* @__PURE__ */ jsx("p", { children: t3 });
    $[7] = t3;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== t) {
    t5 = t("signup.nice");
    $[9] = t;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== t5) {
    t6 = /* @__PURE__ */ jsx("p", { children: t5 });
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t) {
    t7 = t("form.name");
    $[13] = t;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== t7) {
    t8 = /* @__PURE__ */ jsx("input", { type: "text", placeholder: t7 });
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== t) {
    t9 = t("form.email");
    $[17] = t;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== t9) {
    t10 = /* @__PURE__ */ jsx("input", { type: "email", placeholder: t9 });
    $[19] = t9;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] !== t) {
    t11 = t("form.message");
    $[21] = t;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  let t12;
  if ($[23] !== t11) {
    t12 = /* @__PURE__ */ jsx("textarea", { placeholder: t11 });
    $[23] = t11;
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  let t13;
  if ($[25] !== t) {
    t13 = t("form.submit");
    $[25] = t;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  let t14;
  if ($[27] !== t13) {
    t14 = /* @__PURE__ */ jsx("button", { type: "submit", children: t13 });
    $[27] = t13;
    $[28] = t14;
  } else {
    t14 = $[28];
  }
  let t15;
  if ($[29] !== t10 || $[30] !== t12 || $[31] !== t14 || $[32] !== t8) {
    t15 = /* @__PURE__ */ jsxs("form", { children: [
      t8,
      t10,
      t12,
      t14
    ] });
    $[29] = t10;
    $[30] = t12;
    $[31] = t14;
    $[32] = t8;
    $[33] = t15;
  } else {
    t15 = $[33];
  }
  let t16;
  if ($[34] !== t) {
    t16 = t("signup.contactUs");
    $[34] = t;
    $[35] = t16;
  } else {
    t16 = $[35];
  }
  let t17;
  if ($[36] !== t16) {
    t17 = /* @__PURE__ */ jsx("p", { className: "contact-title", children: t16 });
    $[36] = t16;
    $[37] = t17;
  } else {
    t17 = $[37];
  }
  let t18;
  if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsx(EmailIcon, {});
    $[38] = t18;
  } else {
    t18 = $[38];
  }
  let t19;
  if ($[39] !== t) {
    t19 = t("signup.email");
    $[39] = t;
    $[40] = t19;
  } else {
    t19 = $[40];
  }
  let t20;
  if ($[41] !== t19) {
    t20 = /* @__PURE__ */ jsxs("a", { href: "mailto:info@leveluptraining.nl", className: "contact-link email-link", children: [
      t18,
      /* @__PURE__ */ jsx("span", { children: t19 })
    ] });
    $[41] = t19;
    $[42] = t20;
  } else {
    t20 = $[42];
  }
  let t21;
  if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = /* @__PURE__ */ jsx(InstagramIcon, {});
    $[43] = t21;
  } else {
    t21 = $[43];
  }
  let t22;
  if ($[44] !== t) {
    t22 = t("signup.instagram");
    $[44] = t;
    $[45] = t22;
  } else {
    t22 = $[45];
  }
  let t23;
  if ($[46] !== t22) {
    t23 = /* @__PURE__ */ jsxs("a", { href: "https://instagram.com/leveluptraining", target: "_blank", rel: "noopener noreferrer", className: "contact-link instagram-link", children: [
      t21,
      /* @__PURE__ */ jsx("span", { children: t22 })
    ] });
    $[46] = t22;
    $[47] = t23;
  } else {
    t23 = $[47];
  }
  let t24;
  if ($[48] !== t20 || $[49] !== t23) {
    t24 = /* @__PURE__ */ jsxs("div", { className: "contact-links", children: [
      t20,
      t23
    ] });
    $[48] = t20;
    $[49] = t23;
    $[50] = t24;
  } else {
    t24 = $[50];
  }
  let t25;
  if ($[51] !== t) {
    t25 = t("signup.follow");
    $[51] = t;
    $[52] = t25;
  } else {
    t25 = $[52];
  }
  let t26;
  if ($[53] !== t25) {
    t26 = /* @__PURE__ */ jsx("p", { className: "follow-text", children: t25 });
    $[53] = t25;
    $[54] = t26;
  } else {
    t26 = $[54];
  }
  let t27;
  if ($[55] !== t17 || $[56] !== t24 || $[57] !== t26) {
    t27 = /* @__PURE__ */ jsxs("div", { className: "contact-section", children: [
      t17,
      t24,
      t26
    ] });
    $[55] = t17;
    $[56] = t24;
    $[57] = t26;
    $[58] = t27;
  } else {
    t27 = $[58];
  }
  let t28;
  if ($[59] !== t15 || $[60] !== t27 || $[61] !== t4 || $[62] !== t6) {
    t28 = /* @__PURE__ */ jsxs("div", { className: "signup-form", children: [
      t4,
      t6,
      t15,
      t27
    ] });
    $[59] = t15;
    $[60] = t27;
    $[61] = t4;
    $[62] = t6;
    $[63] = t28;
  } else {
    t28 = $[63];
  }
  let t29;
  if ($[64] !== t1 || $[65] !== t28) {
    t29 = /* @__PURE__ */ jsxs("section", { id: "signup", className: "signup", children: [
      t1,
      t2,
      t28
    ] });
    $[64] = t1;
    $[65] = t28;
    $[66] = t29;
  } else {
    t29 = $[66];
  }
  return t29;
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
const serverManifest = { "entry": { "module": "/assets/entry.client-mBydkK4D.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/i18n-CTG4v3OK.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-ClwIuA6R.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/i18n-CTG4v3OK.js", "/assets/i18nInstance-CHFDjdcJ.js", "/assets/compiler-runtime-CKJrz8R4.js"], "css": ["/assets/root-Dtn62Xmo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layouts/main": { "id": "layouts/main", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/main-DbEY4xuA.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/compiler-runtime-CKJrz8R4.js", "/assets/i18n-CTG4v3OK.js", "/assets/InstagramIcon-LjhD_Kpz.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": ["/assets/main-BeEpN_fr.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "layouts/main", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-a-Id2aUa.js", "imports": ["/assets/chunk-NISHYRIK-BUbHN9cH.js", "/assets/compiler-runtime-CKJrz8R4.js", "/assets/InstagramIcon-LjhD_Kpz.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": ["/assets/home-BwNDt0tH.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-5d62730b.js", "version": "5d62730b", "sri": void 0 };
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
