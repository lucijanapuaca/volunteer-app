import React, { useState, useEffect} from 'react';
import '../styles/associations.css';
import { useUserRole } from '../components/UserRoleContext';
import axios from 'axios';
import Association from '../components/Association';
import AddAssociation from '../components/AddAssociation';

interface AssociationProps {
  id: string;
  name: string;
  address: string;
  city: string;
  status: string;
  isAdmin: boolean;
}

const Udruge: React.FC = () => {
  const [associations, setAssociations] = useState<AssociationProps[]>([]);
  const [sortedAssociations, setSortedAssociations] = useState<AssociationProps[]>([]);
  const { role } = useUserRole();
  const [cities, setCities] = useState<string[]>([]);
  const [showAddAssociationModal, setShowAddAssociationModal] = useState<Boolean>(false);

  const fetchAssociations = () => {
    axios.get('http://localhost:3001/associations')
      .then(response => {
        setAssociations(response.data);
        setSortedAssociations(response.data)
      })
      .catch(error => {
        console.error('Error fetching associations:', error);
      });
  };

  const sortAssociationsByName = () => {
    const sorted = [...associations].sort((a, b) => a.name.localeCompare(b.name));
    setSortedAssociations(sorted);
  };
  
  const resetFilter = () => {
    setSortedAssociations(associations);
  };

  const handleToggleModal = () => {
    setShowAddAssociationModal(!showAddAssociationModal);
  };

  const handleSubmitAssociation = (formData: AssociationProps) => {
    axios.post(`http://localhost:3001/associations/`, formData)
      .then(response => {
        console.log('Association added successfully:', response.data);
        fetchAssociations();
      })
      .catch(error => {
        console.error('Error adding association:', error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:3001/cities/')
    .then(res => {
      setCities(res.data.map((city: { name: string }) => city.name));
    })
    fetchAssociations();
  }, []);

  const generateRandomId = (length: number): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let randomId = '';
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomId;
  };


  return (
    <div className='main'>
    <h3 className='title'>Popis udruga</h3>
    <button onClick={handleToggleModal}>Dodaj udrugu</button>
    {showAddAssociationModal && <AddAssociation id={generateRandomId(4)} onClose={handleToggleModal} onSubmit={handleSubmitAssociation} cities={cities}/>}
    <h4>Sortiranje</h4>
    
      <div className='sortWrapper'>
        <button onClick={sortAssociationsByName} className='sortBtn'>Po imenu</button>
        <button onClick={resetFilter} className='sortBtn'>Bez sortiranja</button>
      </div>

      <div>
      {sortedAssociations
          .filter(association => association.status.includes('approved'))
          .map(association => (
            <Association
              key={association.id}
              id={association.id}
              name={association.name}
              address={association.address}
              city={association.city}
              status={association.status}
              isAdmin={role === 'admin'}
              cities={cities}
            />
          ))}

      </div>
    </div>
  );
};

export default Udruge;
