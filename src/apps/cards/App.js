// @ts-nocheck
import React, { useRef, useState, useCallback, lazy, Suspense } from 'react';
import './App.scss';
import useComponentSize from '@rehooks/component-size';
import uuid from 'uuid';
import { useLocalStorageState } from '../../common/utils/use-local-stotage';
import { Card } from './Card';
import { AddButton } from './AddButton';
import { Summary } from './Summary';

const AddModal = lazy(() => import('./AddModal'));

const ModalLoader = () => (
  <div className="Modal-Loader w-100 h-100 bg-info">Loading</div>
);

const App = () => {
  const [cards, setCards] = useLocalStorageState('cards', {});
  const [dragCardInfo, setDragCardInfo] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const boardRef = useRef(null);
  const boardSize = useComponentSize(boardRef);
  const { height, width } = boardSize;

  const updateCardsOnMouseMove = ev => {
    if (!dragCardInfo) {
      return;
    }
    const { card, dragOffset } = dragCardInfo;

    setCards({
      ...cards,
      [card.id]: {
        ...card,
        position: {
          top: ev.pageY - dragOffset.y,
          left: ev.pageX - dragOffset.x,
        },
      },
    });
  };

  const showDialog = useCallback(() => setIsAddOpen(true), []);

  const addCard = label => {
    const id = uuid.v4();

    return setCards({
      ...cards,
      [id]: {
        id,
        label,
        position: {
          left: width * 0.5,
          top: height * 0.5,
        },
      },
    });
  };

  const handleDelete = card => {
    delete cards[card.id];
    setCards({ ...cards });
  };

  const cardEls = Object.values(cards).map(card => (
    <Card
      card={card}
      key={card.id}
      onDragStart={dragOffset => setDragCardInfo({ card, dragOffset })}
      onDragEnd={() => setDragCardInfo(null)}
      onDoubleClick={() => handleDelete(card)}
    />
  ));

  return (
    <div className="App-card" ref={boardRef} onMouseMove={updateCardsOnMouseMove}>
      {cardEls}
      <Summary cards={cards} />
      <AddButton onClick={showDialog} />
      {isAddOpen && (
        <Suspense fallback={<ModalLoader />}>
          <AddModal
            isOpen={isAddOpen}
            onClose={() => setIsAddOpen(false)}
            onAdd={cardText => addCard(cardText)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default App;
