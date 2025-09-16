import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Globe,
  Mail,
  GraduationCap,
  CheckCircle,
  Star,
  Building,
  Eye,
  Shield,
  Zap,
} from "lucide-react"

export default function WallectionHomepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Wallection</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </Link>
              <Link href="/showrooms" className="text-muted-foreground hover:text-foreground transition-colors">
                Showrooms
              </Link>
              <ContactForm>
                <Button className="bg-primary hover:bg-primary/90">Nous contacter</Button>
              </ContactForm>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative z-10 pt-24 pb-16 px-6 bg-slate-900"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-20">
              <Badge className="mb-6 bg-primary text-white border-primary">Plateforme B2B Premium</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Connectez talents et opportunités.
                <br />
                <span className="text-green-400">Accédez aux showrooms premium.</span>
              </h1>
              <div className="relative z-20 bg-slate-900 p-1 rounded-lg">
                <p className="text-xl text-white mb-8 text-pretty max-w-lg">
                  Wallection est la plateforme qui connecte les écoles et leurs talents avec les recruteurs à travers
                  des showrooms digitaux premium.
                </p>
              </div>
              <ContactForm>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                  Découvrir la plateforme
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactForm>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="bg-slate-900 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-white">Dashboard Analytics</h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                      <span className="text-sm text-slate-400">Collections premium</span>
                      <span className="font-semibold text-white">47</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                      <span className="text-sm text-slate-400">Nouveaux talents</span>
                      <span className="font-semibold text-white">+156</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary rounded-lg">
                      <span className="text-sm text-white">Taux de connexion</span>
                      <span className="font-semibold text-white">+23%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center space-x-3">
              <Eye className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Collections actives</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">8,500+</div>
                <div className="text-sm text-muted-foreground">Talents référencés</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">320+</div>
                <div className="text-sm text-muted-foreground">Recruteurs actifs</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">2,400+</div>
                <div className="text-sm text-muted-foreground">Connexions réalisées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="solution" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Une plateforme, deux expériences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wallection connecte les écoles qui valorisent leurs talents et les recruteurs qui recherchent les
              meilleurs profils.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Schools */}
            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Pour les Écoles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Créez vos showrooms</h4>
                    <p className="text-muted-foreground text-sm">Valorisez vos talents avec des collections premium</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fédérez vos partenaires</h4>
                    <p className="text-muted-foreground text-sm">Développez votre communauté d'entreprises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Générez des revenus</h4>
                    <p className="text-muted-foreground text-sm">Monétisez l'accès à vos collections premium</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Recruiters */}
            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Pour les Recruteurs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Accédez aux showrooms</h4>
                    <p className="text-muted-foreground text-sm">Découvrez les talents des meilleures écoles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Collections sur-mesure</h4>
                    <p className="text-muted-foreground text-sm">
                      Accès gratuit, payant ou restreint selon vos besoins
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Contact direct</h4>
                    <p className="text-muted-foreground text-sm">Connectez-vous directement avec les talents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Types Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Différents niveaux d'accès aux collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Chaque école définit ses propres conditions d'accès selon la valeur de ses collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-600">Collections Gratuites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accès libre aux collections publiques pour découvrir les talents et les formations
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-orange-600">Collections Restreintes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accès sur invitation ou validation pour les entreprises partenaires privilégiées
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Collections Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accès payant aux collections les plus exclusives avec profils détaillés et contact direct
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary text-white border-primary">Wallection</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Rejoignez la plateforme qui connecte talents et opportunités
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-white">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Accès aux meilleurs showrooms</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Collections adaptées à vos besoins</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Contact direct avec les talents</span>
                </div>
              </div>
              <p className="text-white mb-6">
                Que vous soyez une école ou un recruteur, découvrez comment Wallection peut transformer votre approche
                du recrutement.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Contactez-nous</h3>
              <div className="space-y-4">
                <ContactForm>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Mail className="mr-2 h-5 w-5" />
                    contact@wallection.com
                  </Button>
                </ContactForm>
                <ContactForm>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-white hover:bg-primary hover:text-black bg-transparent"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    wallection.com
                  </Button>
                </ContactForm>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold text-foreground">Wallection</span>
              </div>
              <p className="text-muted-foreground text-sm">
                La plateforme premium qui connecte talents et opportunités à travers des showrooms digitaux.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Solution</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/showrooms" className="hover:text-foreground transition-colors">
                    Showrooms
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Collections de talents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    CGU
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© 2024 Wallection. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
