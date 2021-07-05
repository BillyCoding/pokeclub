import { ReactNode } from 'react';
import { AddButton } from './styles';


interface ButtonDefaultProps {
    title: string;
    onClick: () => void;
    loading?: boolean;
    disable?: boolean;
    type?: 'outlined' | 'filled'
  }

export const ButtonDefault = ({ onClick,title,disable,loading, type='filled' }: ButtonDefaultProps) => {
  return (
    <>
      <AddButton onClick={onClick} style={{border: type=="outlined" ?  '1px solid var(--primary)' : 0, backgroundColor: type==='outlined' ? '#FFF' : 'var(--primary)' , marginRight: 10}}>
        <h1 style={{fontSize: 14, fontWeight: 400, color: type=='outlined' ? 'var(--primary)' : 'white'}}>{title}</h1>
      </AddButton>
    </>
  );
};

