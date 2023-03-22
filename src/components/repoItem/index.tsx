import { Repository } from "../../hooks/useRepositories";
import PersonIcon from "../../icons/personIcon";
import StarIcon from "../../icons/starIcon";
import defaultRepoImage from "../../images/defaultRepoImage.png";
import {
  Card,
  Logo,
  RepoDataWrapper,
  FollowersDataWrapper,
  Row,
  Flex,
} from "./styles";

type Props = {
  repository: Repository;
};

const ReportItem = ({ repository }: Props) => {
  return (
    <Card>
      <Logo
        src={repository.owner.avatar_url ?? defaultRepoImage}
        alt="Owner Avatar"
      />
      <Flex>
        <RepoDataWrapper>
          <span>{repository.name ?? "Repository Name"}</span>
          <span>{repository.owner.login ?? "Author Name"}</span>
          <span>{repository.language ?? "Programming Language"}</span>
          <span>{repository.description ?? "Repository Description"}</span>
        </RepoDataWrapper>
        <FollowersDataWrapper>
          <Row>
            <StarIcon />
            <span>
              {repository.stargazers_count ?? 0}
              <span> stars</span>
            </span>
          </Row>
          <Row>
            <PersonIcon />
            <span>{repository.watchers_count ?? 0} watchers</span>
          </Row>
        </FollowersDataWrapper>
      </Flex>
    </Card>
  );
};

export default ReportItem;
