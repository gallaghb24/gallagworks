interface CaseStudyCardProps {
  sector: string;
  problem: string;
  whatChanged: string;
  stayedHuman: string;
  outcome: string;
}

const CaseStudyCard = ({ sector, problem, whatChanged, stayedHuman, outcome }: CaseStudyCardProps) => {
  return (
    <div className="bg-card border border-border border-l-4 border-l-primary rounded-lg p-8 md:p-10 card-hover">
      <h3 className="font-display text-xl font-semibold text-foreground mb-6">{sector}</h3>

      <div className="space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Problem</h4>
          <p className="text-muted-foreground leading-relaxed text-base md:text-sm">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What changed</h4>
          <p className="text-muted-foreground leading-relaxed text-base md:text-sm">{whatChanged}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">What stayed human</h4>
          <p className="text-muted-foreground leading-relaxed text-base md:text-sm">{stayedHuman}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Outcome</h4>
          <p className="text-foreground font-medium leading-relaxed">{outcome}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
