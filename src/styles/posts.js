import styled from 'styled-components';

export const PostCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 2px rgba(100, 100, 100, 0.25);
  border-radius: 3px;
  padding: 20px;
  padding-bottom: 0px;
`;

export const PostUserStyle = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    margin-right: 10px;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    flex-shrink: 0;
  }

  p{
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #444;

    small {
      color: #a9a9a9;
      font-weight: normal;
    }
  }
`;

export const PostTextStyle = styled.div`
  color: #444;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const PostComment = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    display: flex;
    flex-direction: column;            
    background: #eee;
    font-size: 13px;
    border-radius: 21px;
    padding: 15px;
    width: 100%;
    color: #444;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    small {
      color: #a9a9a9;
      font-weight: normal;
    }

  }
`;

export const PostCommentStyle = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    flex-shrink: 0;
  }

  p {
    display: flex;
    flex-direction: column;            
    background: #eee;
    font-size: 13px;
    border-radius: 21px;
    padding: 15px;
    width: 100%;
    color: #444;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    small {
      color: #a9a9a9;
      font-weight: normal;
    }    
  }
`;