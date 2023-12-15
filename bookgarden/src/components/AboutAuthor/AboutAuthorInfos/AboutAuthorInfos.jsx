/* eslint-disable react/no-unescaped-entities */
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const AboutAuthorInfos = () => {
  return (
    <div className="col-md-7">
      <h5>William Shakespeare</h5>
      <p className="fs-5 my-4">
        William Shakespeare (1564-1616) is one of the foremost writers in
        English literature. His plays, such as "Romeo and Juliet," "Hamlet," and
        "Macbeth," are filled with classics. Shakespeare coined numerous idioms
        and phrases in the English language, focusing on universal themes like
        human nature, love, and power. By staging and financing plays at the
        Globe Theatre, he made significant contributions to the world of
        theater. Shakespeare's works continue to be performed worldwide and
        leave a profound impact in the present day.
      </p>
      <ul className="ps-0 list-unstyled">
        <li className="d-flex align-items-center gap-2"><IoCheckmarkDoneOutline size='1.4rem' />Number of Works: 39 plays, 154 sonnets</li>
        <li className="d-flex align-items-center gap-2"><IoCheckmarkDoneOutline size='1.4rem' />Awards: No awards during his time</li>
        <li className="d-flex align-items-center gap-2"><IoCheckmarkDoneOutline size='1.4rem' />Notable Works: Romeo and Juliet, Hamlet</li>
      </ul>
    </div>
  );
};

export default AboutAuthorInfos;
