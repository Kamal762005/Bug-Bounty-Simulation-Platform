import programs from '../data/programs'
import ProgramCard from '../components/ProgramCard'

export default function Programs() {
  return (
    <div className="program-list">
      <h2>Bug Bounty Programs</h2>
      <div className="cards-container">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  )
}
