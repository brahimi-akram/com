import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Importez également Navigate
import { Navbar } from "./Components/Navbar";
import Acceuil from "./Pages/Acceuil/Acceuil";
import HomeVente from "./Pages/Vente/Components/HomeVent";
import Comptoire from "./Pages/Vente/Components/Comptoire";
import ListBons from "./Pages/Vente/Components/ListBons";
import GestionClients from "./Pages/Vente/Components/GestionCLients";
import PaymentsClient from "./Pages/Vente/Components/PaymentsClient";
import Vendre from "./Pages/Vente/Components/Vendre";
import HomeAchat from "./Pages/Achat/Components/HomeAchat";
import Acheter from "./Pages/Achat/Components/Acheter";
import Fournisseur from "./Pages/Achat/Components/Fournisseurs";
import ReglementFR from "./Pages/Achat/Components/ReglementFR";
import BonsDeCommande from "./Pages/Achat/Components/BonsDeCommande";
import Sidebare from "./Components/Sidebare";
import HomeEtatSuivits from "./Pages/EtatSuivits/Components/HomeEtatSuivits";
import HomeDocuments from "./Pages/Documents/Components/HomeDocuments";
import HomeMagazin from "./Pages/Magazin/Components/HomeMagazin";
function App() {
  const [show, setShow] = useState(true);
  const ToggelSideBare = () => {
    setShow(!show);
  };

  return (
    <div className="">
      <Navbar />
      <Sidebare />
      <div className="px-4 md:px-8 lg:px-12 flex items-center justify-center mt-20">
        <Routes>
          <Route path="/" element={<Navigate to="/Acceuil" />} />{" "}
          {/* Redirige vers Acceuil lors de l'accès à la racine */}
          <Route path="/Acceuil" element={<Acceuil />} />
          {/* Routes de Vente */}
          <Route path="/Vente" element={<HomeVente />}>
            <Route path="Comptoire" element={<Comptoire />} />
            <Route path="ListBons" element={<ListBons />} />
            <Route path="GestionClients" element={<GestionClients />} />
            <Route path="PaymentsClient" element={<PaymentsClient />} />
            <Route path="Vendre" element={<Vendre />} />
          </Route>
          {/* Routes d'achat */}
          <Route path="/Achat" element={<HomeAchat />}>
            <Route path="Acheter" element={<Acheter />} />
            <Route path="Fournisseurs" element={<Fournisseur />} />
            <Route path="ReglementFR" element={<BonsDeCommande />} />
            <Route path="BonsDeCommande" element={<ReglementFR />} />
          </Route>
          {/* Routes d'état et suivits */}
          <Route path="/Etat-Suivit" element={<HomeEtatSuivits />}></Route>
          {/* Routes de Documents */}
          <Route path="/Documents" element={<HomeDocuments />}></Route>
          {/* Routes de Magazin */}
          <Route path="/Magazin" element={<HomeMagazin />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
