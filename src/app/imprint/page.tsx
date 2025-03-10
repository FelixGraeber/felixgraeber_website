"use client";

import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Separator } from "@/components/ui/separator";

export default function ImprintPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Imprint</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="mb-2">Felix Graeber, Gohrenstr. 2, 80802 München</p>
          <p>Mail: <a href="mailto:contact@invoice-converter.com" className="text-primary hover:underline">contact@invoice-converter.com</a></p>
        </section>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Accountable for content</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to Section 7 Paragraph 1 of the German Telemedia Act (TMG). However, according to §§ 8 to 10 TMG, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of corresponding infringements, we will remove this content immediately.
          </p>
        </section>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Liability for links</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Our website contains links to external websites of third parties over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognisable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a legal violation. If we become aware of any infringements of the law, we will remove such links immediately.
          </p>
        </section>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Copyright</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            The contents and works on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
