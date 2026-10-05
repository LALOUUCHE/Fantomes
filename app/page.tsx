const LIEN_PAIEMENT = "https://buy.stripe.com/test_14A3cx1va79m6ah4dP1gs00"

function Fantome({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    >
      <path d="M8 66V30C8 15 19 6 32 6s24 9 24 24v36l-8-7-8 7-8-7-8 7-8-7-8 7Z" />
      <circle cx="24" cy="30" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="40" cy="30" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Bouton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className={`block w-full rounded-xl bg-brule px-6 py-4 text-center text-lg font-bold text-white ${className}`}
    >
      Débusquer mes fantômes, 19 €
    </a>
  );
}

const benefices = [
  {
    t: "Tout est repéré pour toi",
    d: "Tu déposes ton relevé, on isole les prélèvements qui reviennent chaque mois.",
  },
  {
    t: "Classés par ce qu'ils te coûtent par an",
    d: "Un abonnement à 9 € paraît petit. À 108 € par an, il se remarque.",
  },
  {
    t: "La lettre de résiliation est prête",
    d: "Une lettre par abonnement, il ne reste qu'à l'envoyer.",
  },
];

export default function Accueil() {
  return (
    <>
      <main className="mx-auto max-w-xl px-5 pb-32 pt-10">
        <Fantome className="mb-6 h-14 w-12 text-brule" />

        <h1 className="font-titre text-4xl font-bold leading-tight">
          Débusque les abonnements que tu paies sans t&apos;en servir.
        </h1>
        <p className="mt-4 text-xl">
          Dépose ton relevé bancaire. On repère les prélèvements oubliés et on
          rédige les lettres pour les arrêter.
        </p>

        <Bouton className="mt-8" />
        <p className="mt-3 text-center text-sm">
          19 € une seule fois. Pas d&apos;abonnement.
        </p>

        <section className="mt-14 rounded-2xl border-2 border-encre p-6">
          <p className="font-titre text-5xl font-bold text-brule">180 €</p>
          <p className="mt-2 text-lg">
            C&apos;est ce que coûtent 15 € de prélèvement oublié, une fois
            l&apos;année écoulée. Un essai jamais résilié, un service remplacé,
            une option activée une seule fois : c&apos;est petit sur un relevé,
            et ça dure des années.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-titre text-2xl font-bold">
            Ce que tu reçois
          </h2>
          <ul className="mt-6 space-y-6">
            {benefices.map((b) => (
              <li key={b.t} className="border-l-4 border-brule pl-4">
                <p className="font-bold">{b.t}</p>
                <p>{b.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <p className="text-lg">
            Ton relevé n&apos;est pas conservé après l&apos;analyse. Accès livré
            par email sous 3 semaines.
          </p>
          <Bouton className="mt-6" />
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t-2 border-encre bg-creme p-3 sm:hidden">
        <Bouton />
      </div>
    </>
  );
}
