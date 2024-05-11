import React from 'react';
import '../styles/associations.css';

interface AssociationProps {
    id: string;
    name: string;
    address: string;
    city: string;
    status: string;
    isAdmin: boolean;
    cities: string[];
}

const Association: React.FC<AssociationProps> = ({name, address, city}) => {
    
    return (
        <div className="association">
            <h3>{name}</h3>
            <p><strong>Adresa:</strong> {address}</p>
            <p><strong>Grad:</strong> {city}</p>
        </div>
    );
};

export default Association;