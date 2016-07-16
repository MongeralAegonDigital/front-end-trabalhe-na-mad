<?php
/*
 * Adding INJECTED fields to the arguments
 */
$sections = apply_filters("inject_redux_sections", $sections);

/*
 * Comparison function
 */
function cmp($a, $b)
{
    if ($a['order'] == $b['order']) {
        return 0;
    }
    return ($a['order'] < $b['order']) ? -1 : 1;
}

/*
 * Order fields based on order param on the field
 */
$keys = array_keys($sections);

foreach ($sections as $i => &$section) {
    $section['order'] = (isset($section['order'])) ? $section['order'] : array_search($i, $keys);

    foreach ($section['fields'] as $index => &$field) {
        $field['order'] = (isset($field['order'])) ? $field['order'] : $index;

        /* If has LESS flag, make available on LESS */
        if(isset($field['less']) && $field['less'] == true) {
            $this->less[] = $field['id'];
        }
    }
    /* Compare and Order params */
    usort($section['fields'], "cmp");
}
usort($sections, "cmp");
/*
 * Pass $sections back to the class
 */
$this->sections = $sections;