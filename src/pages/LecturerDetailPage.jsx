import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LectorDetail from '../components/Lectors/LectorDetail';
import LECTORS_DATA from '../components/Lectors/lectorsData';
import NotFoundPage from './NotFoundPage';

function LecturerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contactNotice, setContactNotice] = useState('');
  const lecturer = LECTORS_DATA.find((item) => item.id === id);

  if (!lecturer) {
    return <NotFoundPage />;
  }

  return (
    <main className="main">
      <LectorDetail
        lector={lecturer}
        contactNotice={contactNotice}
        onBack={() => navigate('/lecturers')}
        onContact={() =>
          setContactNotice(
            `Заявка на связь с ${lecturer.fullName} отправлена. Ожидайте звонка!`,
          )
        }
      />
    </main>
  );
}

export default LecturerDetailPage;
