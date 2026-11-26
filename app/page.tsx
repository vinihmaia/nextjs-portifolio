import type { ReactNode } from "react";
import Image from "next/image";
import {
  certificados,
  competencias,
  contatos,
  experiencias,
  formacao,
  perfil,
  projetos,
} from "./dados";

// Os mesmos estilos da página original do Next.js
const botaoPrincipal =
  "flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]";
const botaoSecundario =
  "flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]";
const borda = "border border-solid border-black/[.08] dark:border-white/[.145]";
const etiqueta = `rounded-full ${borda} px-3 py-1 text-xs text-zinc-600 dark:text-zinc-400`;
const linkTexto =
  "font-medium text-zinc-950 underline underline-offset-4 hover:no-underline dark:text-zinc-50";

function LinkExterno({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Secao({ id, titulo, children }: { id: string; titulo: string; children: ReactNode }) {
  return (
    <section id={id} className="flex w-full scroll-mt-8 flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {titulo}
      </h2>
      {children}
    </section>
  );
}

function Foto() {
  if (perfil.foto) {
    return (
      <Image
        src={perfil.foto}
        alt={`Foto de ${perfil.nome}`}
        width={112}
        height={112}
        className="h-28 w-28 rounded-full object-cover"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-100 text-3xl font-semibold tracking-tight text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
    >
      {perfil.iniciais}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-20 bg-white px-6 py-20 sm:px-16 sm:py-32 dark:bg-black">
        {/* Abertura */}
        <section className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <Foto />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {perfil.nome}
            </h1>
            <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">{perfil.cargo}</p>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {perfil.resumo}
            </p>
            <p className="text-sm text-zinc-500">{perfil.local}</p>
          </div>
          <div className="flex w-full flex-col gap-4 text-base font-medium sm:flex-row">
            <a className={botaoPrincipal} href="#projetos">
              Ver projetos
            </a>
            <LinkExterno className={botaoSecundario} href={contatos.linkedin}>
              LinkedIn
            </LinkExterno>
            <LinkExterno className={botaoSecundario} href={contatos.github}>
              GitHub
            </LinkExterno>
          </div>
        </section>

        {/* Projetos */}
        <Secao id="projetos" titulo="Projetos">
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Sistemas que eu criei e que estão no ar, usados por clientes de verdade.
          </p>
          <div className="flex flex-col gap-6">
            {projetos.map((p) => (
              <article key={p.nome} className={`rounded-2xl ${borda} p-6`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
                    {p.nome}
                  </h3>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">{p.descricao}</p>
                <ul className="mt-4 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {p.destaques.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tecnologias.map((t) => (
                    <span key={t} className={etiqueta}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-5 text-sm">
                  <LinkExterno href={p.site} className={linkTexto}>
                    Ver site ↗
                  </LinkExterno>
                  {p.codigo ? (
                    <LinkExterno href={p.codigo} className={linkTexto}>
                      Ver código ↗
                    </LinkExterno>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Secao>

        {/* Experiência */}
        <Secao id="experiencia" titulo="Experiência">
          <ol className="flex flex-col gap-8 border-l border-solid border-black/[.08] pl-6 dark:border-white/[.145]">
            {experiencias.map((e) => (
              <li key={e.cargo + e.empresa} className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-semibold text-black dark:text-zinc-50">
                    {e.cargo} · {e.empresa}
                  </h3>
                  <span className="shrink-0 text-sm text-zinc-500">{e.periodo}</span>
                </div>
                <p className="text-sm text-zinc-500">{e.local}</p>
                <p className="mt-1 leading-7 text-zinc-600 dark:text-zinc-400">{e.descricao}</p>
              </li>
            ))}
          </ol>
        </Secao>

        {/* Formação e certificados */}
        <Secao id="formacao" titulo="Formação e certificados">
          <div className={`rounded-2xl ${borda} p-6`}>
            <h3 className="font-semibold text-black dark:text-zinc-50">{formacao.curso}</h3>
            <p className="mt-1 text-sm text-zinc-500">
              {formacao.instituicao} · {formacao.periodo}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certificados.map((c) => (
              <li key={c.nome} className={`rounded-xl ${borda} p-4`}>
                <p className="text-sm font-medium text-black dark:text-zinc-50">{c.nome}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {[c.emissor, c.ano].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </Secao>

        {/* Competências */}
        <Secao id="competencias" titulo="Competências">
          <div className="flex flex-col gap-5">
            {competencias.map((g) => (
              <div key={g.grupo}>
                <h3 className="text-sm font-medium text-black dark:text-zinc-50">{g.grupo}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {g.itens.map((i) => (
                    <span key={i} className={etiqueta}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Secao>

        {/* Contato */}
        <Secao id="contato" titulo="Vamos conversar?">
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Estou aberto a vagas de TI e a novos projetos. Me chame por qualquer um destes canais.
          </p>
          <div className="flex w-full flex-col gap-4 text-base font-medium sm:flex-row">
            <a className={botaoPrincipal} href={`mailto:${contatos.email}`}>
              E-mail
            </a>
            <LinkExterno className={botaoSecundario} href={contatos.linkedin}>
              LinkedIn
            </LinkExterno>
            <LinkExterno className={botaoSecundario} href={contatos.github}>
              GitHub
            </LinkExterno>
          </div>
        </Secao>

        <footer className="flex flex-col gap-2 border-t border-solid border-black/[.08] pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:border-white/[.145]">
          <span>
            {perfil.nome} · {perfil.local}
          </span>
          <span className="flex gap-4">
            <LinkExterno href={contatos.instagram} className="hover:underline">
              Instagram
            </LinkExterno>
            <LinkExterno href={contatos.site} className="hover:underline">
              Vitrapi
            </LinkExterno>
          </span>
        </footer>
      </main>
    </div>
  );
}