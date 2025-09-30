import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useLocation } from "react-router";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import { useEffect, useState } from "react";
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        onShellReady() {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error);
          responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, 1e4);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }
  return /* @__PURE__ */ jsxs("main", {
    style: {
      padding: "2rem",
      textAlign: "center"
    },
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack && /* @__PURE__ */ jsx("pre", {
      style: {
        padding: "2rem",
        background: "hsla(10, 50%, 50%, 0.1)",
        color: "red",
        overflow: "auto",
        maxWidth: "100%"
      },
      children: stack
    })]
  });
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
    en: { translation: en },
    nl: { translation: nl },
    es: { translation: es }
  },
  lng: "en",
  // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
const HeaderSection = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx("div", { className: "logo", children: "Level Up" }),
    /* @__PURE__ */ jsxs("div", { className: "language-selector", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => changeLanguage("en"), children: "EN" }),
      /* @__PURE__ */ jsx("button", { onClick: () => changeLanguage("nl"), children: "NL" }),
      /* @__PURE__ */ jsx("button", { onClick: () => changeLanguage("es"), children: "ES" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#hero", children: t("nav.home") }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#trainings", children: t("nav.trainings") }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#schedule", children: t("nav.schedule") }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#pricing", children: t("nav.pricing") }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#signup", children: t("nav.contact") }) })
    ] })
  ] }) });
};
const SignupIcon = ({
  width = 220,
  height = 200,
  className
}) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 220 200",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "100",
            r: "90",
            fill: "url(#signupGradient1)",
            opacity: "0.1"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "100",
            r: "70",
            fill: "url(#signupGradient2)",
            opacity: "0.15"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "100",
            r: "50",
            fill: "url(#signupGradient3)",
            opacity: "0.2"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M70 80L110 110L150 80V140H70V80Z", fill: "url(#signupGradient4)" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M70 80L110 110L150 80",
            stroke: "url(#signupGradient4)",
            strokeWidth: "3",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "110", cy: "60", r: "15", fill: "url(#signupGradient4)" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M95 45C95 37 102 30 110 30C118 30 125 37 125 45",
            stroke: "url(#signupGradient4)",
            strokeWidth: "3",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56Z",
            fill: "url(#signupGradient5)",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M170 40L172 46L178 46L173 50L175 56L170 52L165 56L167 50L162 46L168 46Z",
            fill: "url(#signupGradient5)",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M180 120L182 126L188 126L183 130L185 136L180 132L175 136L177 130L172 126L178 126Z",
            fill: "url(#signupGradient5)",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "signupGradient1",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "signupGradient2",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9500" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "signupGradient3",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "signupGradient4",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "signupGradient5",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FFD700" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
const PricingIcon = ({
  width = 220,
  height = 200,
  className
}) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 220 200",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "100",
            r: "90",
            fill: "url(#pricingGradient1)",
            opacity: "0.1"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "100",
            r: "70",
            fill: "url(#pricingGradient2)",
            opacity: "0.15"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "110",
            cy: "100",
            r: "50",
            fill: "url(#pricingGradient3)",
            opacity: "0.2"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "70",
            y: "60",
            width: "80",
            height: "50",
            rx: "8",
            fill: "url(#pricingGradient4)",
            stroke: "url(#pricingGradient5)",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "75",
            y: "65",
            width: "70",
            height: "8",
            rx: "4",
            fill: "rgba(255,255,255,0.8)"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "75",
            y: "78",
            width: "45",
            height: "6",
            rx: "3",
            fill: "rgba(255,255,255,0.6)"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "75",
            y: "88",
            width: "35",
            height: "6",
            rx: "3",
            fill: "rgba(255,255,255,0.6)"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "135", cy: "85", r: "8", fill: "rgba(255,255,255,0.8)" }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "40",
            y: "130",
            width: "30",
            height: "8",
            rx: "4",
            fill: "url(#pricingGradient6)"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "35", cy: "134", r: "6", fill: "url(#pricingGradient6)" }),
        /* @__PURE__ */ jsx("circle", { cx: "75", cy: "134", r: "6", fill: "url(#pricingGradient6)" }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "150",
            y: "130",
            width: "30",
            height: "8",
            rx: "4",
            fill: "url(#pricingGradient6)"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "145", cy: "134", r: "6", fill: "url(#pricingGradient6)" }),
        /* @__PURE__ */ jsx("circle", { cx: "185", cy: "134", r: "6", fill: "url(#pricingGradient6)" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M95 40C95 35 100 30 110 30C120 30 125 35 125 40V45H95V40Z",
            fill: "url(#pricingGradient7)"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "100",
            y: "45",
            width: "20",
            height: "15",
            rx: "2",
            fill: "url(#pricingGradient7)"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "105",
            y: "60",
            width: "10",
            height: "8",
            fill: "url(#pricingGradient7)"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "102",
            y: "68",
            width: "16",
            height: "4",
            rx: "2",
            fill: "url(#pricingGradient7)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56L50 50Z",
            fill: "url(#pricingGradient8)",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M170 50L172 56L178 56L173 60L175 66L170 62L165 66L167 60L162 56L168 56L170 50Z",
            fill: "url(#pricingGradient8)",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient1",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient2",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9500" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient3",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient4",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF6B6B" }),
                /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#FF9500" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#4ECDC4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient5",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient6",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FF9500" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient7",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FFD700" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF9500" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pricingGradient8",
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4ECDC4" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FF6B6B" })
              ]
            }
          )
        ] })
      ]
    }
  );
};
const EmailIcon = ({ width = 24, height = 24, className }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      children: /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 8l-8 5-8-5V6l8 5 8-5v2z" })
    }
  );
};
const InstagramIcon = ({
  width = 24,
  height = 24,
  className
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width,
      height,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
    }
  );
};
const FooterSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "footer-content", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-contacts", children: [
      /* @__PURE__ */ jsxs("a", { href: "mailto:info@leveluptraining.nl", className: "footer-link", children: [
        /* @__PURE__ */ jsx(EmailIcon, { width: 18, height: 18 }),
        "info@leveluptraining.nl"
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://instagram.com/leveluptraining",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "footer-link",
          children: [
            /* @__PURE__ */ jsx(InstagramIcon, { width: 18, height: 18 }),
            "@leveluptraining"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { children: t("footer.copyright") })
  ] }) });
};
const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = "https://leveluptraining.nl/og-image.jpg",
  url = "https://leveluptraining.nl/",
  locale
}) => {
  const { i18n: i18n2 } = useTranslation();
  const currentLocale = locale || i18n2.language;
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    const updateMetaTag = (name, content) => {
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
    };
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
  }, [title, description, keywords, ogImage, url, currentLocale]);
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
const main = UNSAFE_withComponentProps(function MainLayout() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(SEOHead, {
      title: "Level Up Training - Outdoor Personal Training in The Hague",
      description: "Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training. Try a free trial week!",
      keywords: "personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
    }), /* @__PURE__ */ jsxs("div", {
      className: "app",
      children: [/* @__PURE__ */ jsx(HeaderSection, {}), /* @__PURE__ */ jsx("main", {
        children: /* @__PURE__ */ jsx(Outlet, {})
      }), /* @__PURE__ */ jsx(FooterSection, {})]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: main
}, Symbol.toStringTag, { value: "Module" }));
const HeroSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("section", { id: "hero", className: "hero", children: [
    /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsx("h1", { children: t("hero.title") }),
      /* @__PURE__ */ jsx("h2", { children: t("hero.subtitle") }),
      /* @__PURE__ */ jsx("p", { children: t("hero.tagline") }),
      /* @__PURE__ */ jsx("p", { children: t("hero.description") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hero-image", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Outdoor fitness training group"
      }
    ) })
  ] });
};
const ImageWithSkeleton = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  console.log("ImageWithSkeleton rendering with src:", src, typeof src);
  const handleLoad = () => {
    console.log("Image loaded successfully:", src);
    setIsLoading(false);
  };
  const handleError = () => {
    console.error("Image failed to load:", src);
    setHasError(true);
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: `image-with-skeleton ${className || ""}`, children: [
    isLoading && /* @__PURE__ */ jsx("div", { className: "image-skeleton", children: /* @__PURE__ */ jsx("div", { className: "skeleton-shimmer" }) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        width,
        height,
        loading,
        onLoad: handleLoad,
        onError: handleError,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
          display: isLoading || hasError ? "none" : "block",
          backfaceVisibility: "hidden"
        }
      }
    ),
    hasError && /* @__PURE__ */ jsxs("div", { className: "image-error", children: [
      /* @__PURE__ */ jsx("div", { className: "error-icon", children: "📷" }),
      /* @__PURE__ */ jsx("span", { children: "Image unavailable" })
    ] })
  ] });
};
const TrainingCard = ({
  title,
  description,
  imageSrc,
  imageAlt
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "training", children: [
    /* @__PURE__ */ jsx("div", { className: "training-image", children: /* @__PURE__ */ jsx(
      ImageWithSkeleton,
      {
        src: imageSrc,
        alt: imageAlt,
        width: 800,
        height: 600,
        loading: "eager"
      }
    ) }),
    /* @__PURE__ */ jsx("h3", { children: title }),
    /* @__PURE__ */ jsx("p", { children: description })
  ] });
};
const strengthTrainingImg = "/assets/strength-training-DcDDA0Vz.jpg";
const runningTrainingImg = "/assets/running-training-CMb3FdBq.jpg";
const parentChildTrainingImg = "/assets/parent-child-training-BBdrpnFg.jpg";
const TrainingsSection = () => {
  const { t } = useTranslation();
  console.log("Imported image URLs:", {
    strengthTrainingImg,
    runningTrainingImg,
    parentChildTrainingImg
  });
  const getImageSrc = (importedImg, fallbackPath) => {
    if (typeof importedImg === "string" && importedImg.length > 0) {
      return importedImg;
    }
    return fallbackPath;
  };
  return /* @__PURE__ */ jsxs("section", { id: "trainings", className: "trainings", children: [
    /* @__PURE__ */ jsx("h2", { children: t("trainings.title") }),
    /* @__PURE__ */ jsxs("div", { className: "trainings-grid", children: [
      /* @__PURE__ */ jsx(
        TrainingCard,
        {
          title: t("trainings.level1.title"),
          description: t("trainings.level1.desc"),
          imageSrc: getImageSrc(
            strengthTrainingImg,
            "/images/strength-training.jpg"
          ),
          imageAlt: t("trainings.level1.imageAlt")
        }
      ),
      /* @__PURE__ */ jsx(
        TrainingCard,
        {
          title: t("trainings.level2.title"),
          description: t("trainings.level2.desc"),
          imageSrc: getImageSrc(
            runningTrainingImg,
            "/images/running-training.jpg"
          ),
          imageAlt: t("trainings.level2.imageAlt")
        }
      ),
      /* @__PURE__ */ jsx(
        TrainingCard,
        {
          title: t("trainings.level3.title"),
          description: t("trainings.level3.desc"),
          imageSrc: getImageSrc(
            parentChildTrainingImg,
            "/images/parent-child-training.jpg"
          ),
          imageAlt: t("trainings.level3.imageAlt")
        }
      )
    ] })
  ] });
};
const LocationCard = ({
  title,
  time,
  type,
  capacity,
  location,
  mapSrc,
  dates,
  isComingSoon = false,
  comingSoonText = "*COMING SOON*"
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "location-card", children: [
    /* @__PURE__ */ jsx("h4", { children: title }),
    /* @__PURE__ */ jsxs("div", { className: "location-details", children: [
      isComingSoon && /* @__PURE__ */ jsx("div", { className: "training-time coming-soon", children: comingSoonText }),
      /* @__PURE__ */ jsx("div", { className: "training-time", children: time }),
      /* @__PURE__ */ jsx("div", { className: "training-type", children: type }),
      /* @__PURE__ */ jsx("div", { className: "training-capacity", children: capacity }),
      /* @__PURE__ */ jsx("div", { className: "training-location", children: location }),
      dates && /* @__PURE__ */ jsx("div", { className: "training-dates", children: dates })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "map-container", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: mapSrc,
        width: "100%",
        height: "200",
        style: { border: 0, borderRadius: "8px" },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ) })
  ] });
};
const ScheduleSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("section", { id: "schedule", className: "schedule", children: [
    /* @__PURE__ */ jsx("h2", { children: t("schedule.title") }),
    /* @__PURE__ */ jsxs("div", { className: "locations-section", children: [
      /* @__PURE__ */ jsx("h3", { children: t("schedule.locationsTitle") }),
      /* @__PURE__ */ jsxs("div", { className: "locations-grid", children: [
        /* @__PURE__ */ jsx(
          LocationCard,
          {
            title: t("schedule.locations.peacePalace.title"),
            time: t("schedule.locations.peacePalace.time"),
            type: t("schedule.locations.peacePalace.type"),
            capacity: t("schedule.locations.peacePalace.capacity"),
            location: t("schedule.locations.peacePalace.location"),
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.8934567890!2d4.287647315708086!3d52.10516097972684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6a7e1b02a59%3A0x5f1b6a7e1b02a59!2sPeace%20Palace%2C%20Carnegieplein%202%2C%202517%20KJ%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456789"
          }
        ),
        /* @__PURE__ */ jsx(
          LocationCard,
          {
            title: t("schedule.locations.scheveningse.title"),
            time: t("schedule.locations.scheveningse.time"),
            type: t("schedule.locations.scheveningse.type"),
            capacity: t("schedule.locations.scheveningse.capacity"),
            location: t("schedule.locations.scheveningse.location"),
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.3326386195881!2d4.335391910669067!3d52.0488124708928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6f4c5d05b47%3A0xc9bfa2760dec51c3!2s2282%20JR%20Rijswijk!5e1!3m2!1sen!2snl!4v1759050133365!5m2!1sen!2snl"
          }
        ),
        /* @__PURE__ */ jsx(
          LocationCard,
          {
            title: t("schedule.locations.indischMonument.title"),
            time: t("schedule.locations.indischMonument.time"),
            type: t("schedule.locations.indischMonument.type"),
            capacity: t("schedule.locations.indischMonument.capacity"),
            location: t("schedule.locations.indischMonument.location"),
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.123!2d4.301234!3d52.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b8d5e6f7a8b9%3A0x1a2b3c4d5e6f7a8b!2sIndisch%20Monument%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456791",
            dates: t("schedule.locations.indischMonument.dates")
          }
        ),
        /* @__PURE__ */ jsx(
          LocationCard,
          {
            title: t("schedule.locations.verademing.title"),
            time: t("schedule.locations.verademing.time"),
            type: t("schedule.locations.verademing.type"),
            capacity: t("schedule.locations.verademing.capacity"),
            location: t("schedule.locations.verademing.location"),
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.456!2d4.283456!3d52.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b9e1f2a3b4c5%3A0x6d7e8f9a0b1c2d3e!2sDe%20Verademing%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456792",
            isComingSoon: true,
            comingSoonText: t("schedule.comingSoon")
          }
        )
      ] })
    ] })
  ] });
};
const PricingSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("section", { id: "pricing", className: "pricing", children: [
    /* @__PURE__ */ jsx("h2", { children: t("pricing.title") }),
    /* @__PURE__ */ jsx("div", { className: "pricing-image", children: /* @__PURE__ */ jsx("div", { className: "pricing-icon-container", children: /* @__PURE__ */ jsx(PricingIcon, {}) }) }),
    /* @__PURE__ */ jsxs("div", { className: "pricing-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "price", children: [
        /* @__PURE__ */ jsx("h3", { children: t("pricing.strip10.title") }),
        /* @__PURE__ */ jsx("p", { children: t("pricing.strip10.desc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "price", children: [
        /* @__PURE__ */ jsx("h3", { children: t("pricing.strip20.title") }),
        /* @__PURE__ */ jsx("p", { children: t("pricing.strip20.desc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "price", children: [
        /* @__PURE__ */ jsx("h3", { children: t("pricing.single.title") }),
        /* @__PURE__ */ jsx("p", { children: t("pricing.single.desc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "price", children: [
        /* @__PURE__ */ jsx("h3", { children: t("pricing.unlimited.title") }),
        /* @__PURE__ */ jsx("p", { children: t("pricing.unlimited.desc") })
      ] })
    ] })
  ] });
};
const SignupSection = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("section", { id: "signup", className: "signup", children: [
    /* @__PURE__ */ jsx("h2", { children: t("signup.title") }),
    /* @__PURE__ */ jsx("div", { className: "signup-image", children: /* @__PURE__ */ jsx("div", { className: "signup-icon-container", children: /* @__PURE__ */ jsx(SignupIcon, {}) }) }),
    /* @__PURE__ */ jsxs("div", { className: "signup-form", children: [
      /* @__PURE__ */ jsx("p", { children: t("signup.signupNow") }),
      /* @__PURE__ */ jsx("p", { children: t("signup.nice") }),
      /* @__PURE__ */ jsxs("form", { children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: t("form.name") }),
        /* @__PURE__ */ jsx("input", { type: "email", placeholder: t("form.email") }),
        /* @__PURE__ */ jsx("textarea", { placeholder: t("form.message") }),
        /* @__PURE__ */ jsx("button", { type: "submit", children: t("form.submit") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contact-section", children: [
        /* @__PURE__ */ jsx("p", { className: "contact-title", children: t("signup.contactUs") }),
        /* @__PURE__ */ jsxs("div", { className: "contact-links", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:info@leveluptraining.nl",
              className: "contact-link email-link",
              children: [
                /* @__PURE__ */ jsx(EmailIcon, {}),
                /* @__PURE__ */ jsx("span", { children: t("signup.email") })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://instagram.com/leveluptraining",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "contact-link instagram-link",
              children: [
                /* @__PURE__ */ jsx(InstagramIcon, {}),
                /* @__PURE__ */ jsx("span", { children: t("signup.instagram") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "follow-text", children: t("signup.follow") })
      ] })
    ] })
  ] });
};
const home = UNSAFE_withComponentProps(function Home() {
  const location = useLocation();
  useEffect(() => {
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
  }, [location.hash]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      id: "hero",
      children: /* @__PURE__ */ jsx(HeroSection, {})
    }), /* @__PURE__ */ jsx("div", {
      id: "trainings",
      children: /* @__PURE__ */ jsx(TrainingsSection, {})
    }), /* @__PURE__ */ jsx("div", {
      id: "schedule",
      children: /* @__PURE__ */ jsx(ScheduleSection, {})
    }), /* @__PURE__ */ jsx("div", {
      id: "pricing",
      children: /* @__PURE__ */ jsx(PricingSection, {})
    }), /* @__PURE__ */ jsx("div", {
      id: "signup",
      children: /* @__PURE__ */ jsx(SignupSection, {})
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CtO-VVj0.js", "imports": ["/assets/chunk-NISHYRIK-ZbW7QuV4.js", "/assets/i18n-CTG4v3OK.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-ChXygwmd.js", "imports": ["/assets/chunk-NISHYRIK-ZbW7QuV4.js", "/assets/i18n-CTG4v3OK.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": ["/assets/root-Dtn62Xmo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "layouts/main": { "id": "layouts/main", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/main-CE-wSZer.js", "imports": ["/assets/chunk-NISHYRIK-ZbW7QuV4.js", "/assets/i18n-CTG4v3OK.js", "/assets/InstagramIcon-Co2k_kmy.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": ["/assets/main-BeEpN_fr.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "layouts/main", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DQsDtHJE.js", "imports": ["/assets/chunk-NISHYRIK-ZbW7QuV4.js", "/assets/InstagramIcon-Co2k_kmy.js", "/assets/i18nInstance-CHFDjdcJ.js"], "css": ["/assets/home-BwNDt0tH.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-4553f2a3.js", "version": "4553f2a3", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/"];
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
