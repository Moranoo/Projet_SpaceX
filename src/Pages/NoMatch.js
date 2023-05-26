import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@tremor/react';

export default function NoMatch() {
    const location = useLocation();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="text-xl">Page non trouvée (404)</h1>
            <br />
            <p>
                La page <b>{location.pathname}</b> n'existe pas.
            </p>
            <br />
            <Link to="/">
                <Button>Retour à l'accueil</Button>
            </Link>
        </div>
    );
}
