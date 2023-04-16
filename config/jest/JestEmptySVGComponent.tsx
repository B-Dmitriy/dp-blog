import React from 'react';

interface JestEmptySVGComponentProps {
    onClick?: (arg: any) => void;
}

const JestEmptySVGComponent = ({
    onClick,
}: JestEmptySVGComponentProps) => <svg data-testid="test_svg_icon_id" onClick={onClick} />;

export default JestEmptySVGComponent;
