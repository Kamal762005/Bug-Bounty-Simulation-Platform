import { useParams } from 'react-router-dom'
import programs from '../data/programs'

export default function ProgramDetail() {
    const { id } = useParams()
    const program = programs.find(p => p.id === id)

    if (!program) {
        return <div>Program not found.</div>
    }

    return (
        <div className="program-detail">
            <img src={program.logo} alt={program.company} className="logo" />
            <h2>{program.company}</h2>
            <p><strong>Reward Range:</strong> {program.reward}</p>
            <p>{program.brief}</p>

            <section className="detail-section">
                <h3>Scope</h3>
                <p>This section would include details about what’s in-scope for this bounty program.</p>
            </section>

            <section className="detail-section">
                <h3>Rules</h3>
                <ul>
                    <li>Follow responsible disclosure guidelines</li>
                    <li>No DDoS or social engineering</li>
                    <li>Only test your own accounts</li>
                </ul>
            </section>
            <section className="detail-section">
                <h3>Submit a Vulnerability</h3>
                <form className="submit-form" onSubmit={(e) => {
                    e.preventDefault()

                    const title = e.target.title.value
                    const description = e.target.description.value
                    const severity = e.target.severity.value

                    const submission = {
                        id: Date.now(),
                        title,
                        description,
                        severity,
                        programId: program.id,
                        programName: program.company,
                        submittedAt: new Date().toLocaleString()
                    }

                    const existing = JSON.parse(localStorage.getItem('reports')) || []
                    existing.push(submission)
                    localStorage.setItem('reports', JSON.stringify(existing))

                    alert('Submission saved successfully!')
                    e.target.reset()
                }}>

                    <label>
                        Title:
                        <input type="text" name="title" required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" rows="4" required></textarea>
                    </label>
                    <label>
                        Severity:
                        <select name="severity" required>
                            <option value="">Select</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>

        </div>

    )
}
