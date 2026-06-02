import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Database, TrendingUp, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Skills",
      color: "bg-amber-100 text-amber-700",
      skills: [
        "Microsoft Excel (Pivot Table, IF, SUMIFS, Data Cleaning)",
        "Data Reporting & Dashboard",
        "Spreadsheet Management",
        "Data Visualization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Skills",
      color: "bg-orange-100 text-orange-700",
      skills: [
        "Business Analysis Basic",
        "Process Monitoring",
        "Data Documentation",
        "Stakeholder Management"
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technology",
      color: "bg-red-100 text-red-700",
      skills: [
        "Excel",
        "Google Sheets",
        "SAP (MM & FI - Basic)",
        "Tableau (Basic)",
        "Power BI (Basic)",
        "Canva"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Kombinasi technical skills dan business acumen untuk menghasilkan insight yang actionable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl bg-white">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Critical Thinking", "Team Collaboration", "Communication", "Time Management", "Attention to Detail"].map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-white border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-400 text-amber-800 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}