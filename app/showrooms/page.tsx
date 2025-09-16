import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Globe,
  Mail,
  GraduationCap,
  Handshake,
  BarChart3,
  CheckCircle,
  Star,
  Building,
  Award,
} from "lucide-react"

export default function ShowroomsPage() {
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
              <a href="/#solution" className="text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="/showrooms" className="text-primary font-medium">
                Showrooms
              </a>
              <ContactForm>
                <Button className="bg-primary hover:bg-primary/90">Nous contacter</Button>
              </ContactForm>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary text-white border-primary">Plateforme B2B Premium</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Valorisez vos talents.
                <br />
                <span className="text-green-400">Fédérez vos entreprises partenaires.</span>
              </h1>
              <p className="text-xl text-white mb-8 text-pretty max-w-lg">
                Wallection transforme vos étudiants et alumni en vitrine digitale premium pour attirer et fidéliser vos
                entreprises partenaires.
              </p>
              <ContactForm>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                  Commencer maintenant
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
                      <span className="text-sm text-slate-400">Collections vues</span>
                      <span className="font-semibold text-white">2,847</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                      <span className="text-sm text-slate-400">Entreprises actives</span>
                      <span className="font-semibold text-white">156</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary rounded-lg">
                      <span className="text-sm text-white">Leads générés</span>
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
              <Users className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">100,000+</div>
                <div className="text-sm text-muted-foreground">Étudiants</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Entreprises</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">200%</div>
                <div className="text-sm text-muted-foreground">Croissance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problematique" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vos talents sont votre meilleure vitrine
            </h2>
            <p className="text-lg text-muted-foreground">Mais comment les valoriser efficacement ?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Visibilité limitée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comment mettre en avant efficacement vos talents auprès des entreprises ?
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Fidélisation difficile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comment fidéliser vos partenaires et en attirer de nouveaux ?</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Preuves de valeur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comment prouver la valeur de vos formations grâce au parcours de vos alumni ?
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-primary">→ Wallection vous apporte la réponse.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Votre showroom digital de talents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avec Wallection, chaque organisme de formation peut créer sa vitrine premium et développer sa communauté
              d'entreprises partenaires.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Collections de Talents</h3>
                  <p className="text-muted-foreground">
                    Créez et publiez vos collections d'étudiants, diplômés et alumni avec leurs parcours détaillés.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Communauté d'entreprises</h3>
                  <p className="text-muted-foreground">
                    Fédérez vos partenaires qui s'abonnent à votre showroom et reçoivent automatiquement vos nouvelles
                    collections.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Statistiques avancées</h3>
                  <p className="text-muted-foreground">
                    Obtenez des insights clés : popularité des collections, formations les plus consultées, entreprises
                    intéressées.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Dashboard Analytics</h4>
                  <Badge className="bg-primary text-primary-foreground">Live</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Collections vues</span>
                    <span className="font-semibold text-foreground">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Entreprises actives</span>
                    <span className="font-semibold text-foreground">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Leads générés</span>
                    <span className="font-semibold text-primary">+23%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Les bénéfices pour votre organisme</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Un marketing puissant de vos formations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Montrez à vos prospects et partenaires la réussite de vos talents. Donnez de la visibilité à vos
                  promotions en formation, en insertion ou déjà en poste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Une communauté d'entreprises engagées</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vos entreprises partenaires s'abonnent à vos publications. Vous suivez leurs interactions et renforcez
                  vos relations avec elles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Un outil stratégique de pilotage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identifiez les formations les plus attractives pour le marché. Valorisez vos statistiques auprès des
                  financeurs et institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Une opportunité de revenus complémentaires</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monétisez l'accès à vos collections les plus attendues par les entreprises. Wallection ne prend que
                  20% de commission sur vos revenus.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-6 bg-slate-100 rounded-2xl border border-primary/20">
            <p className="text-lg font-semibold text-slate-900 mb-2">
              Pour vous : aucun coût d'utilisation, tout le reste est gratuit.
            </p>
            <p className="text-slate-700">
              Simple à mettre en place • Gratuit et sans engagement • Potentiel de revenus additionnels
            </p>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Espaces Personnels des Talents</p>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-primary text-white border-primary">Talents</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Chaque talent dispose de son
                <br />
                <span className="text-primary">espace personnel</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Vos étudiants et alumni créent leur profil professionnel complet avec CV, portfolio et réalisations. Ils
                reçoivent directement les demandes de contact des entreprises intéressées et peuvent gérer leurs
                opportunités depuis leur tableau de bord personnel.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Profil professionnel personnalisé</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Réception des demandes entreprises</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Gestion autonome des opportunités</span>
                </div>
              </div>
              <ContactForm>
                <Button className="bg-primary hover:bg-primary/90">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ContactForm>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions
                <br />
                fréquemment posées
              </h2>
              <p className="text-muted-foreground">
                Trouvez les réponses aux questions les plus courantes sur Wallection.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">Combien de temps faut-il pour configurer ?</h4>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">Quelle est votre commission ?</h4>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">Comment nous communiquons ?</h4>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">
                    J'ai un projet plus important, pouvez-vous m'aider ?
                  </h4>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="temoignage" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 text-balance">
                "Grâce à Wallection, nous avons doublé le nombre d'entreprises partenaires actives, et généré de
                nouveaux financements en valorisant nos talents."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">DR</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Directeur des Relations Entreprises</p>
                  <p className="text-sm text-muted-foreground">[Nom d'une école]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Wallection</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wallection, votre vitrine digitale pour révéler vos talents.
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Simple à mettre en place</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Gratuit et sans engagement</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Potentiel de revenus additionnels</span>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Essayez dès aujourd'hui et découvrez comment valoriser vos talents auprès de vos entreprises
                partenaires.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">Commencez dès aujourd'hui</h3>
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
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
                La plateforme premium pour valoriser vos talents et fédérer vos entreprises partenaires.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Solution</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Collections de talents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Communauté d'entreprises
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
