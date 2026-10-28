import React, { useState } from 'react';

export default function HospitalQueueApp() {
  const [activeTab, setActiveTab] = useState('problem'); // 'problem' | 'token' | 'live'
  const [bookedToken, setBookedToken] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [department, setDepartment] = useState('General Medicine');

  const handleBookToken = (e) => {
    e.preventDefault();
    if (!patientName) return;
    const tokenNo = Math.floor(100 + Math.random() * 900);
    setBookedToken({
      number: tokenNo,
      name: patientName,
      dept: department,
      estTime: '11:45 AM',
      peopleAhead: 14
    });
    setActiveTab('live');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Header Navigation */}
      <header style={{ background: '#0f2942', color: '#fff', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#f59e0b', color: '#0f2942', padding: '8px 12px', borderRadius: '10px', fontWeight: '900', fontSize: '16px' }}>🏥</div>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>SwasthyaQ — Smart OPD Queue System</h1>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {[
            { id: 'problem', label: '1. Defining the Problem' },
            { id: 'token', label: '2. Get Digital Token' },
            { id: 'live', label: '3. Live Queue Status' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? '#1e3a8a' : 'transparent',
                color: activeTab === tab.id ? '#f59e0b' : '#cbd5e1',
                border: '1px solid',
                borderColor: activeTab === tab.id ? '#f59e0b' : 'transparent',
                padding: '8px 16px',
                borderRadius: '10px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 24px' }}>

        {/* TAB 1: DEFINING THE PROBLEM (Exact match to your slide image) */}
        {activeTab === 'problem' && (
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0f2942', marginBottom: '28px' }}>
              1. Defining the problem
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.2fr', gap: '32px', alignItems: 'stretch' }}>
              
              {/* Left Dark Card */}
              <div style={{ background: '#0f2942', color: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(15, 41, 66, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#f59e0b', lineHeight: '1.2', marginBottom: '20px' }}>
                  Long queues in government hospitals
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', margin: 0 }}>
                  In government hospitals, patients stand in a long line for hours just to get a token. A patient who has travelled a long distance must also wait a long time, even for a short check-up.
                </p>
              </div>

              {/* Right 3 Pointed Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Point 1 */}
                <div style={{ background: '#e2e8f0', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ background: '#f59e0b', color: '#0f2942', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '900', flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800', color: '#0f2942' }}>Token only at the counter</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>A patient must reach early and stand in line to get a token.</p>
                  </div>
                </div>

                {/* Point 2 */}
                <div style={{ background: '#e2e8f0', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ background: '#f59e0b', color: '#0f2942', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '900', flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800', color: '#0f2942' }}>No fixed time</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>Nobody knows when their turn will come.</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div style={{ background: '#e2e8f0', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ background: '#f59e0b', color: '#0f2942', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: '900', flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800', color: '#0f2942' }}>Long travel + long wait</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>People from villages lose a full day for one visit.</p>
                  </div>
                </div>

              </div>

            </div>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button 
                onClick={() => setActiveTab('token')} 
                style={{ background: '#0f2942', color: '#fff', border: 'none', padding: '16px 36px', borderRadius: '14px', fontSize: '16px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 15px rgba(15, 41, 66, 0.3)' }}
              >
                Experience Solution: Get Digital Token 🎟️
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: GET DIGITAL TOKEN FORM */}
        {activeTab === 'token' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '900', color: '#0f2942' }}>Generate Remote OPD Token</h2>
            <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#64748b' }}>Skip the early morning physical queue. Get your token right from your phone.</p>

            <form onSubmit={handleBookToken} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#0f2942', marginBottom: '8px' }}>Patient Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ramesh Kumar"
                  value={patientName}
                  onChange={e => setPatientName(e.target.value)}
                  style={{ width: '100%', padding: '14px 18px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', outline: 'none', background: '#f8fafc' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#0f2942', marginBottom: '8px' }}>Select Hospital Department</label>
                <select 
                  value={department}
                  onChange={e => setDepartment(e.target.value)}
                  style={{ width: '100%', padding: '14px 18px', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '15px', outline: 'none', background: '#f8fafc', fontWeight: '600' }}
                >
                  <option value="General Medicine">General Medicine OPD</option>
                  <option value="Orthopedics">Orthopedics OPD</option>
                  <option value="Pediatrics">Pediatrics OPD</option>
                  <option value="Cardiology">Cardiology OPD</option>
                </select>
              </div>

              <button type="submit" style={{ background: '#f59e0b', color: '#0f2942', border: 'none', padding: '16px', borderRadius: '14px', fontSize: '16px', fontWeight: '900', cursor: 'pointer', marginTop: '10px' }}>
                Generate Digital Token 🚀
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: LIVE QUEUE STATUS */}
        {activeTab === 'live' && (
          <div style={{ maxWidth: '650px', margin: '0 auto', background: '#0f2942', color: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(15, 41, 66, 0.3)', textAlign: 'center' }}>
            {bookedToken ? (
              <div>
                <div style={{ background: '#f59e0b', color: '#0f2942', display: 'inline-block', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '900', marginBottom: '16px', textTransform: 'uppercase' }}>
                  {bookedToken.dept}
                </div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: '800', color: '#cbd5e1' }}>Patient: {bookedToken.name}</h3>
                
                <div style={{ fontSize: '80px', fontWeight: '900', color: '#f59e0b', margin: '20px 0', fontFamily: 'monospace' }}>
                  #{bookedToken.number}
                </div>

                <div style={{ background: 'rgba(255,255,255,0.08)', padding: '24px', borderRadius: '16px', display: 'flex', justifyContent: 'space-around', margin: '24px 0' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>Estimated Turn Time</div>
                    <div style={{ fontSize: '20px', fontWeight: '900', color: '#fff', marginTop: '4px' }}>{bookedToken.estTime}</div>
                  </div>
                  <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}></div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>People Ahead</div>
                    <div style={{ fontSize: '20px', fontWeight: '900', color: '#f59e0b', marginTop: '4px' }}>{bookedToken.peopleAhead} Patients</div>
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
                  You do not need to stand in line! Relax at home or outside; you will receive an SMS alert when 3 patients are left before your turn.
                </p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>No active token found!</h3>
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Please generate your digital token first.</p>
                <button onClick={() => setActiveTab('token')} style={{ background: '#f59e0b', color: '#0f2942', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: '800', cursor: 'pointer' }}>
                  Get Token Now
                </button>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}