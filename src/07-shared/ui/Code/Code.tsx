import { memo, useCallback } from 'react';
import { Button } from '07-shared/ui/Button/Button';
import CopyIcon from '07-shared/assets/icons/copy.svg';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(classes.Code, {}, [className])}>
            <Button onClick={onCopy} className={classes.copyBtn} view="clear">
                <CopyIcon className={classes.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
