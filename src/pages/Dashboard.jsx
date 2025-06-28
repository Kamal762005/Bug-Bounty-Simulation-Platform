import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [reports, setReports] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      alert('Please log in to access the dashboard.')
      navigate('/login')
      return
    }

    const storedReports = JSON.parse(localStorage.getItem('reports')) || []
    setReports(storedReports)
  }, [])

  const handleDelete = (id) => {
    const updated = reports.filter((r) => r.id !== id)
    localStorage.setItem('reports', JSON.stringify(updated))
    setReports(updated)
  }

  return (
    <div className="dashboard">
      <h2>Your Submitted Vulnerabilities</h2>
      {reports.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul className="report-list">
          {reports.map((report) => (
            <li key={report.id} className="report-item">
              <div className="report-header">
                <h4>{report.title} <span className="severity-tag">({report.severity})</span></h4>
                <button className="delete-btn" onClick={() => handleDelete(report.id)}>Delete</button>
              </div>
              <p><strong>Program:</strong> {report.programName}</p>
              <p>{report.description}</p>
              <small>Submitted: {report.submittedAt}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
