const fs = require('fs').promises;

const IMPERATIVE_VERBS = [
  'add',
  'drop',
  'fix',
  'bump',
  'make',
  'start',
  'stop',
  'optimize',
  'document',
  'refactor',
  'reformat',
  'rephrase',
];

const handleError = (err) => {
  console.error(err.message);
  process.exitCode = 1;
};
const checkTitle = (lines) => {
  /**
   * Call method after parsing the commit message to ensure that the title is the first line.
   */
  const title = lines[0].trim();

  const firstChar = title.charAt(0);
  if (firstChar !== firstChar.toUpperCase()) {
    throw new Error(
      '[COMMIT_FAILED] First character must be a capital letter.',
    );
  }

  const lastChar = title.charAt(title.length - 1);
  if (lastChar === '.') {
    throw new Error('[COMMIT_FAILED] Title cannot end with a period.');
  }

  if (title.length > 50) {
    throw new Error('[COMMIT_FAILED] Title cannot be more than 50 characters.');
  }

  const verb = title.split(' ')[0];
  const match = IMPERATIVE_VERBS.includes(verb.toLowerCase());

  if (!match) {
    console.warn(
      `[COMMIT_WARNING] The verb "${verb}" is not in the list of recommended imperative verbs. Please consider using one of the following: ${IMPERATIVE_VERBS.join(', ')} ⚠️`,
    );
  }
};
const checkBlankLineBetweenTitleAndBody = (lines) => {
  /**
   * Call method after parsing the commit message to ensure that there is a blank line between the title and the body.
   */
  if (lines[1].trim() !== '') {
    throw new Error(
      '[COMMIT_FAILED] There must be a blank line between the title and the body.',
    );
  }
};
const checkBody = (lines) => {
  /**
   * Call method after parsing the commit message to ensure that the body content starts at the third line.
   */
  const bodyContent = lines.slice(2, lines.length).filter((line) => !!line);
  bodyContent.forEach((line) => {
    if (line.length > 72) {
      throw new Error(
        '[COMMIT_FAILED] Each line in the body cannot be more than 72 characters.',
      );
    }
  });
};
const parseCommitMessage = (commitMsg) => {
  const linesWithoutComments = commitMsg
    .split(/\r?\n/)
    .filter((line) => !line.startsWith('#'));
  const indexesWhereLinesAreNotEmpty = linesWithoutComments
    .map((line, index) => (line.trim() !== '' ? index : -1))
    .filter((index) => index !== -1);

  if (indexesWhereLinesAreNotEmpty.length < 2) {
    throw new Error(
      '[COMMIT_FAILED] Commit message must have at least 2 lines.',
    );
  }

  /**
   * Return the lines between the first non-empty line and the last non-empty line.
   */
  return linesWithoutComments.slice(
    indexesWhereLinesAreNotEmpty[0],
    indexesWhereLinesAreNotEmpty[indexesWhereLinesAreNotEmpty.length - 1] + 1,
  );
};

const validateCommitMsg = (commitMsg) => {
  const lines = parseCommitMessage(commitMsg);
  checkTitle(lines);
  checkBlankLineBetweenTitleAndBody(lines);
  checkBody(lines);
  console.info(
    '[COMMIT_SUCCEEDED] Commit message follows the policy format. Commit has been accepted ✅',
  );
};

const commitMsgFile = process.argv[2];
fs.readFile(commitMsgFile, 'utf8')
  .then((data) => {
    validateCommitMsg(data);
  })
  .catch((err) => handleError(err));
