import styled from 'styled-components';


export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`

export const TextInput = styled.input`
    padding: 20px;
    color: black;
    background: #FFF;
    border: none;
    border-radius: 3px;
    flex: 1;
    border: 1px solid #CBCBCB;
    &:focus {
    border: 1px solid var(--primary);}
    &:hover{
        border: 1px solid var(--primary)
    }
`

export const TitleInput = styled.h1`
  color: #8493A0;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
`

export const TextArea = styled.textarea`
    padding: 20px;
    color: black;
    background: #FFF;
    border: none;
    border-radius: 3px;
    flex: 1;
    border: 1px solid #CBCBCB;
    &:focus {
    border: 1px solid var(--primary);}
    &:hover{
        border: 1px solid var(--primary)
    }
`
