import { useState} from "react";
import { SegmentedControl } from "@mantine/core";
import ChoiceBased from "../../components/ChoiceBased/ChoiceBased";
import PromptBased from "../../components/PromptBased/PromptBased";
import AllClothes from "../../components/AllClothes/AllClothes";
import Textbased from "../../components/TextBased/TextBased";
import { CHOICE } from "../../enums/choice";

const Choice = () => {
  const [searchType, setSearchType] = useState<string>(CHOICE.TAGS);

  return (
    <div>
      <div className="segmentControl">
        <SegmentedControl
          size="lg"
          radius="lg"
          color="blue"
          onChange={(value: string) => {
            setSearchType(value);
          }}
          data={[
            { label: "Use tags", value: CHOICE.TAGS },
            { label: "Design a prompt", value: CHOICE.PROMPT },
            { label: "Chat with Us", value: CHOICE.CHAT },
          ]}
        />
      </div>
      {searchType === CHOICE.TAGS && <ChoiceBased />}
      {searchType === CHOICE.PROMPT && <PromptBased />}
      {searchType === CHOICE.CHAT && <Textbased />}
      {searchType !== CHOICE.CHAT && <AllClothes />}
    </div>
  );
};

export default Choice;
