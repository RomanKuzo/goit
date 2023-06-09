import styled from 'styled-components';
import Input from '../../components/input';
import StyledPagination from '../../components/pagination/pagination';
import ReportItem from '../../components/repoItem';
import useRepositories from '../../hooks/useRepositories';

const InputWrapper = styled.div`
  margin-top: 32px;
  padding-left: 24px;
  z-index: 2;
  position: relative;
  > input {
    width: -webkit-fill-available;
  }
`;

const InfoText = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Home = () => {
  const data = useRepositories();

  return (
    <>
      <InputWrapper>
        <Input onChange={data.handleSearch} />
      </InputWrapper>

      {data.loading ? (
        <InfoText>Loading...</InfoText>
      ) : data.repositories.length > 0 ? (
        <>
          {data.repositories.map((i) => (
            <ReportItem repository={i} key={i.id} />
          ))}

          <StyledPagination
            $showPrev={data.page !== 1}
            $showNext={data.page !== data.totalPages}
            pageCount={data.totalPages}
            // The pagination package starts counting from 0, so we have to decrease this value by 1
            forcePage={data.page - 1}
            pageRangeDisplayed={7}
            breakLabel=""
            marginPagesDisplayed={0}
            onPageChange={data.handlePageChange}
            nextLabel="Next"
            previousLabel="Previous"
          />
        </>
      ) : (
        <InfoText>There are no items</InfoText>
      )}
    </>
  );
};

export default Home;
