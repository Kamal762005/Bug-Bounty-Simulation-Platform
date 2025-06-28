import { Link } from 'react-router-dom'

export default function ProgramCard({ program }) {
  return (
    <div className="program-card">
      <img src={program.logo} alt={program.company} className="logo" />
      <h3>{program.company}</h3>
      <p>{program.brief}</p>
      <p><strong>Reward:</strong> {program.reward}</p>
      <Link to={`/programs/${program.id}`} className="details-link">View Details</Link>
    </div>
  )
}
