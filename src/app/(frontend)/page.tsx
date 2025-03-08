'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';

interface WorkExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  graduationYear: number;
}

interface Skill {
  skill: string;
}

interface Language {
  language: string;
}

interface Hobby {
  hobby: string;
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  hobbies: Hobby[];
}

const ResumePage: React.FC = () => {
  const [isweModalOpen, setIswkModalOpen] = useState(false);
  const openweModal = () => setIswkModalOpen(true);
  const closeweModal = () => setIswkModalOpen(false);

  const [isedModalOpen, setIsedModalOpen] = useState(false);
  const openedModal = () => setIsedModalOpen(true);
  const closeedModal = () => setIsedModalOpen(false);

  const [isskModalOpen, setIsskdModalOpen] = useState(false);
  const openskModal = () => setIsskdModalOpen(true);
  const closeskModal = () => setIsskdModalOpen(false);

  const [islgModalOpen, setIslgModalOpen] = useState(false);
  const openlgModal = () => setIslgModalOpen(true);
  const closelgModal = () => setIslgModalOpen(false);

  const [ishbModalOpen, setIshbModalOpen] = useState(false);
  const openhbModal = () => setIshbModalOpen(true);
  const closehbModal = () => setIshbModalOpen(false);

  const [resume, setResume] = useState<ResumeData | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get('http://localhost:3000/resume');
        console.log('Fetched resume data:', response.data);
        setResume(response.data.docs[0]); // Assuming there's only one resume
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchResume();
  }, []);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{resume.name}</h1>
      <address>
        <p><a href="mailto:bbessieres@gmail.com">{resume.email}</a><br /></p>
        <p><a href="tel:+33633995345">{resume.phone}</a></p>
      </address>
      <div>
      <button className="cybr-btn" onClick={openweModal}>
        Work Experience<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">Cyber_</span>
        <span aria-hidden className="cybr-btn__tag">R25</span>
      </button>
        {isweModalOpen && (
          <Modal onClose={closeweModal} title="Work Experience">
            <ul>
              {resume.workExperience?.map((job, index) => (
                <li key={index}>
                  <h3>{job.jobTitle} at {job.company}</h3>
                  <p>{job.startDate} - {job.endDate}</p>
                  <p>{job.description}</p>
                </li>
            ))}
            </ul>
          </Modal>
        )}
        
      </div>
      <div>
      <button className="cybr-btn" onClick={openedModal}>
        Education<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">Cyber_</span>
        <span aria-hidden className="cybr-btn__tag">R25</span>
      </button>
        {isedModalOpen && (
          <Modal onClose={closeedModal} title="Education">
            <ul>
              {resume.education?.map((edu, index) => (
                <li key={index}>
                  <h3>{edu.degree} from {edu.institution}</h3>
                  <p>Graduated in {edu.graduationYear}</p>
                </li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
      <div>
      <button className="cybr-btn" onClick={openskModal}>
        Skills<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">Cyber_</span>
        <span aria-hidden className="cybr-btn__tag">R25</span>
      </button>
        {isskModalOpen && (
          <Modal onClose={closeskModal} title="Skills">
            <ul>
              {resume.skills?.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
      <div>
      <button className="cybr-btn blue" onClick={openlgModal}>
        Languages<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">Cyber_</span>
        <span aria-hidden className="cybr-btn__tag">R25</span>
      </button>
        {islgModalOpen && (
          <Modal onClose={closelgModal} title="Languages">
            <ul>
              {resume.languages?.map((language, index) => (
                <li key={index}>{language.language}</li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
      <div>
      <button className="cybr-btn green" onClick={openhbModal}>
        Hobbies<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">Cyber_</span>
        <span aria-hidden className="cybr-btn__tag">R25</span>
      </button>
        {ishbModalOpen && (
          <Modal onClose={closehbModal} title="Hobbies">
            <ul>
              {resume.hobbies?.map((hobby, index) => (
                <li key={index}>{hobby.hobby}</li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ResumePage;