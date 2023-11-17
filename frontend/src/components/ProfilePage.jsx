import React, { useState } from 'react';
import Close from '@mui/icons-material/Close';


const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('meusPedidos');
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      {overlayVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-neutral-400 p-8 rounded-lg">
          <button
              className="top-4 right-4 text-gray-600 cursor-pointer"
              onClick={handleCloseOverlay}
            >
              <Close/>
            </button>
            <div className="flex">
              <div
                className={`cursor-pointer p-2 ${
                  activeTab === 'meusPedidos' ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleTabClick('meusPedidos')}
              >
                Meus Pedidos
              </div>
              <div
                className={`cursor-pointer p-2 ${
                  activeTab === 'outroConteudo' ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleTabClick('outroConteudo')}
              >
                Outro Conteúdo
              </div>
              {/* Adicione mais abas conforme necessário */}
            </div>
            <div className="mt-4">
              {activeTab === 'meusPedidos' && (
                <div>Conteúdo dos Pedidos</div>
              )}
              {activeTab === 'outroConteudo' && (
                <div>Outro Conteúdo</div>
              )}
              {/* Adicione mais blocos de conteúdo conforme necessário */}
            </div>
          </div>
        </div>
      )}
      {/* O restante do conteúdo da sua página vai aqui */}
    </>
  );
};

export default ProfilePage;