import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-center py-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Felix Graeber</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Building innovative digital products and experiences.
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#about">About Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-neutral-100">
            <Image
              src="/images/profile.jpg"
              alt="Felix Graeber"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* About Section */}
      <section className="py-12" id="about">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
              I'm a passionate professional focused on creating innovative digital solutions. With expertise in web development and digital product design, I bring ideas to life through clean code and thoughtful user experiences.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              My approach combines technical excellence with business acumen, ensuring that the products I build not only function flawlessly but also deliver real value.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {["Web Development", "React", "TypeScript", "Next.js", "UI/UX Design", "Product Strategy"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/#about" scroll={false}>Learn More About Me</Link>
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Featured Projects Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Project</h2>
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-neutral-100 dark:bg-neutral-800 min-h-[300px] flex items-center justify-center">
              <div className="text-neutral-400">BuyEuropean.io Screenshot</div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">BuyEuropean.io</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                A marketplace connecting consumers with authentic European products, making it easy to discover and purchase quality goods from across Europe.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400">
                    <li>Curated selection of authentic European products</li>
                    <li>Secure payment processing and order tracking</li>
                    <li>Vendor verification and quality assurance</li>
                    <li>Personalized recommendations based on preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "AWS", "Stripe"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/projects/buyeuropean">View Project Details</Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
