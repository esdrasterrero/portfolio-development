<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "Site Package".
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Site Package',
	'description' => 'Sitepackage with basic configuration.',
	'category' => 'templates',
	'author' => 'Esdras Terrero',
	'author_email' => 'esdrasterrero@gmail.com',
	'author_company' => '',
	'state' => 'stable',
	'uploadfolder' => 0,
	'createDirs' => '',
	'version' => '1.0.0',
	'constraints' =>
	array (
		'depends' =>
		array (
			'typo3' => '7.0-7.9.0',
		),
		'conflicts' =>
		array (
		),
		'suggests' =>
		array (
		),
	),
	'_md5_values_when_last_written' => '',
);

